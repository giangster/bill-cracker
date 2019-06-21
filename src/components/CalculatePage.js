import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Expense from "./Expense";
import InputComponent from "./InputComponent";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartPage: false,
      isCalculatePage: true,
      isResultPage: false,
      noOfMember: 0,
      data: []
    };
  }

  addInputComponent = () => {
    this.setState({ noOfMember: this.state.noOfMember + 1 });
  };

  isResultPage = () => {
    this.setState({
      ...this.state,
      isResultPage: true
    });
  };

  handleInput = object => {
    this.setState({
      data: [...this.state.data, object]
    });
    console.log(this.state.data);
  };

  render() {
    var members = [];
    for (var i = 0; i < this.state.noOfMember; i++) {
      members.push(
        <div
          key={i}
          style={{
            margin: "auto",
            width: "20%",
            borderWidth: 0.5,
            borderStyle: "outset",
            borderRadius: "5%",
            backgroundColor: "white",
            padding: 15
          }}
        >
          <strong>Participant {i + 1}</strong>

          <InputComponent key={i} handleInput={this.handleInput} />
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
              Okay. Let's add some participant before we can calculate your
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
            </div>
            {this.state.isResultPage && (
              <Expense noOfMember={this.props.noOfMember} />
            )}
          </div>
        )}
      </div>
    );
  }
}
