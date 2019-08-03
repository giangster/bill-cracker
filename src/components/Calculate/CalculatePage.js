import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Expense from "../Expense/Expense";
import InputComponent from "../InputComponent/InputComponent";
import Snackbar from "@material-ui/core/Snackbar";
import { addParticipant, collectData } from "../../actions/index";
import { connect } from "react-redux";

class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isResultPage: false
    };
  }

  addInputComponent = () => {
    console.log(this.props, this.props.data, this.props.noOfMember);
    // this.props.data.length < this.props.noOfMember
    //   ? this.setState({
    //       messageOpenStatus: true,
    //       message: 'Please click "Add" before adding new participant'
    //     })
    //   : this.setState({ noOfMember: this.props.noOfMember + 1 });

    this.props.addParticipant();
  };

  isResultPage = () => {
    this.props.noOfMember > 1
      ? this.setState({
          ...this.state,
          isResultPage: true
        })
      : this.setState({
          messageOpenStatus: true,
          message: "There has to be at least two participant"
        });
  };

  isNotCalculatePage = () => {
    this.props.isNotCalculatePage();
  };

  handleInput = object => {
    this.props.collectData(object);
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  clearState = () => {
    this.props.isStart();
    this.setState({ data: [], noOfMember: 0, isResultPage: false });
  };

  render() {
    var members = [];
    for (var i = 0; i < this.props.noOfMember; i++) {
      members.push(
        <div
          key={i}
          style={{
            margin: "auto",
            marginTop: 15,
            width: "20%",
            borderWidth: 0.5,
            borderStyle: "outset",
            borderRadius: "5%",
            backgroundColor: "white",
            padding: 15
          }}
        >
          <strong>Participant {i + 1}</strong>

          <InputComponent
            key={i}
            handleInput={this.handleInput}
            data={this.state.data}
          />
        </div>
      );
    }
    return (
      <div>
        {this.props.isCalculatePage && (
          <div>
            <p>
              <strong>{this.props.nameOfTrip}</strong>
            </p>
            <p>
              Okay. Let's add some more information before we can calculate your
              share!
            </p>
            {members}
            <Button
              variant="contained"
              color="primary"
              style={{
                margin: 15,
                backgroundImage:
                  "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
              }}
              onClick={this.addInputComponent}
            >
              Add participant
            </Button>

            <div style={{ margin: "auto" }}>
              <Button
                style={{ marginLeft: 15 }}
                variant="contained"
                color="default"
                onClick={this.clearState}
              >
                &laquo; Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: 15,
                  backgroundImage:
                    "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
                }}
                onClick={this.isResultPage}
              >
                Calculate
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                open={this.state.messageOpenStatus}
                autoHideDuration={2000}
                onClose={this.handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={this.state.message}
              />
            </div>
          </div>
        )}
        {this.state.isResultPage && (
          <Expense
            noOfMember={this.props.noOfMember}
            data={this.state.data}
            isNotCalculatePage={this.isNotCalculatePage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  noOfMember: state.participanti.noOfMember,
  data: state.participanti.participants
});

const mapDispatchToProps = dispatch => ({
  addParticipant: () => {
    dispatch(addParticipant());
  },
  collectData: object => {
    dispatch(collectData(object));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatePage);
