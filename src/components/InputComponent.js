import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: "",
      money: undefined
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    let object = {
      participant: this.state.participant,
      money: this.state.money
    };

    console.log(
      "from input component" + this.state.participant + this.state.money
    );

    this.props.handleData(object);
  };

  render() {
    return (
      <div>
        <FormControl style={{ borderStyle: "solid", borderColor: "blue" }}>
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
      </div>
    );
  }
}
