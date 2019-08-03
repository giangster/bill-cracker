import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Result from "../Result/Result";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import Snackbar from "@material-ui/core/Snackbar";
import { collectData } from "../../actions/index";
import {
  addParticipant,
  removeAllParticipants
} from "../../actions/participantList";
import { connect } from "react-redux";

class ParticipantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isResultPage: false
    };
  }

  isResultPage = () => {
    this.props.participants.length > 1
      ? this.setState({
          ...this.state,
          isResultPage: true
        })
      : this.setState({
          messageOpenStatus: true,
          message: "There has to be at least two participant"
        });
  };

  isNotParticipantList = () => {
    this.props.isNotParticipantList();
  };

  handleInput = object => {
    this.props.collectData(object);
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  clearState = () => {
    this.props.removeAllParticipants();
    this.setState({ isResultPage: false });
  };

  render() {
    var members = [];
    for (var i = 0; i < this.props.participants.length; i++) {
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

          <ParticipantItem
            key={i}
            handleInput={this.handleInput}
            data={this.state.data}
          />
        </div>
      );
    }
    return (
      <div>
        {this.props.isParticipantList && (
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
              onClick={this.props.addParticipant}
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
          <Result
            noOfMember={this.props.participants.length}
            data={this.state.data}
            isNotParticipantList={this.isNotParticipantList}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participantList.participants
});

const mapDispatchToProps = dispatch => ({
  addParticipant: () => {
    dispatch(addParticipant());
  },
  removeAllParticipants: () => {
    dispatch(removeAllParticipants());
  },
  collectData: object => {
    dispatch(collectData(object));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantList);
