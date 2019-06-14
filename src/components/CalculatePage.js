import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Expense from "./Expense";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isStartPage: false, isCalculatePage: true };
  }

  render() {
    var members = [];
    for (var i = 0; i < this.props.noOfMember; i++) {
      members.push(
        <div
          style={{
            margin: "auto",
            width: "30%",
            borderWidth: 0.5,
            borderStyle: "solid",
            borderColor: "primary",
            padding: 5
          }}
        >
          <FormControl style={{ borderStyle: "solid", borderColor: "blue" }}>
            <TextField required label="Name" type="text" />
            <TextField required label="Spent money" type="number" />
          </FormControl>
        </div>
      );
    }
    return (
      <div>
        {this.props.isCalculatePage && (
          <div>
            <p>{this.props.nameOfTrip}</p>
            <p>
              Okay. Let's enter some data before we can calculate your share!
            </p>
            {members.map((form, index) => (
              <ul key={index} style={{ listStyleType: "none" }}>
                <li>{form}</li>
              </ul>
            ))}
            <div style={{ margin: 15 }}>
              <Button
                style={{ position: "static" }}
                variant="contained"
                color="default"
                onClick={this.props.isStartPage}
              >
                &laquo; Back
              </Button>
              <Button
                style={{ marginLeft: 15 }}
                variant="contained"
                color="primary"
                onClick={this.props.isStartPage}
              >
                Calculate
              </Button>
            </div>
            <Expense />
          </div>
        )}
      </div>
    );
  }
}
