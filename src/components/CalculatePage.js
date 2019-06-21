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
      data: []
    };
  }

  isResultPage = () => {
    this.setState({
      ...this.state,
      isResultPage: true
    });
  };

  render() {
    var members = [];
    for (var i = 0; i < this.props.noOfMember; i++) {
      members.push(
        <div>
          <p>
            <strong>Participant {i + 1}</strong>
          </p>
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
              Okay. Let's enter some data before we can calculate your share!
            </p>
            {members.map((form, index) => (
              <ul key={index} style={{ listStyleType: "none" }}>
                <li
                  style={{
                    margin: "auto",
                    width: "20%",
                    borderWidth: 0.5,
                    borderStyle: "outset",
                    borderRadius: "5%",
                    backgroundColor: "white",
                    paddingBottom: 15
                  }}
                >
                  {form}
                  <InputComponent handleData={this.handleData} />
                </li>
              </ul>
            ))}
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
