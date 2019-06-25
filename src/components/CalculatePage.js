import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Expense from "./Expense";
import InputComponent from "./InputComponent";
import Snackbar from "@material-ui/core/Snackbar";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isStartPage: false,
      isCalculatePage: true,
      isResultPage: false,
      noOfMember: 0,
      data: []
    };
  }

  addInputComponent = () => {
    this.state.data.length < this.state.noOfMember
      ? this.setState({
          messageOpenStatus: true,
          message: 'Please click "Add" before adding new participant'
        })
      : this.setState({ noOfMember: this.state.noOfMember + 1 });
  };

  isResultPage = () => {
    this.setState({
      ...this.state,
      isResultPage: true
    });
  };

  handleInput = object => {
    var dataTemp = this.state.data;
    dataTemp.push(object);

    this.setState({
      data: dataTemp
    });
    console.log(this.state.data);
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  render() {
    var members = [];
    for (var i = 0; i < this.state.noOfMember; i++) {
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
                onClick={this.props.isStartPage}
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
            {this.state.isResultPage && (
              <Expense
                noOfMember={this.state.noOfMember}
                data={this.state.data}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
