import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: "",
      money: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleData(this.state.participant, this.state.money);
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
            onChange={this.handleChange}
            value={this.state.participant}
          />
          <TextField
            required
            name="money"
            label="Spent money"
            type="number"
            onChange={this.handleChange}
            value={this.state.money}
          />
          <Button onClick={this.handleInput} />
        </FormControl>
      </div>
    );
  }
}
