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
      participant: "",
      money: undefined
    };
  }

  isResultPage = () => {
    // this.addData();
    this.setState({
      ...this.state,
      isResultPage: true
    });
  };

  handleInput = (e, index) => {
    let dataTemp = this.state.data;
    this.setState({ [e.target.name]: e.target.value });
    let object = {
      participant: this.state.participant,
      money: this.state.money
    };
    dataTemp.push(object);

    this.setState({
      data: dataTemp
    });

    console.log(this.state.data);
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
                  <FormControl
                    style={{ borderStyle: "solid", borderColor: "blue" }}
                  >
                    <TextField
                      required
                      name="participant"
                      label="Participant"
                      type="text"
                      onChange={this.handleInput}
                      value={this.state.participant}
                    />
                    <TextField
                      required
                      name="money"
                      label="Spent money"
                      type="number"
                      onChange={this.handleInput}
                      value={this.state.money}
                    />
                  </FormControl>
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
