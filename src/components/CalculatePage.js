import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Expense from "./Expense";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartPage: false,
      isCalculatePage: true,
      isResultPage: false,
      data: [],
      name: "",
      money: undefined
    };
  }

  isResultPage = () => {
    this.setState({
      ...this.state,
      isResultPage: true
    });
    this.addData();
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addData = () => {
    let object = {
      name: this.state.name,
      money: this.state.money
    };
    this.setState({ data: [...this.state.data, object] });
    console.log(this.state.data);
  };

  render() {
    var members = [];
    for (var i = 0; i < this.props.noOfMember; i++) {
      members.push(
        <div
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
          <p>
            <strong>Participant {i + 1}</strong>
          </p>
          <FormControl style={{ borderStyle: "solid", borderColor: "blue" }}>
            <TextField
              required
              name="name"
              label="Name"
              type="text"
              onChange={this.handleInPut}
              value={this.state.name}
            />
            <TextField
              required
              name="money"
              label="Spent money"
              type="number"
              onChange={this.handleInPut}
              value={this.state.money}
            />
          </FormControl>
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
                <li>{form}</li>
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
                style={{ marginLeft: 15 }}
                variant="contained"
                color="primary"
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
