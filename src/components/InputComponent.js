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
  };

  handleInput = () => {
    let data = {
      participant: this.state.participant,
      money: this.state.money
    };
    console.log(this.state.participant + " " + this.state.money);

    this.props.handleInput(data);
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
          <TextField name="description" label="Description" type="text" />
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: 15,
                margin: "auto",
                marginTop: 15,
                backgroundImage:
                  "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
              }}
              onClick={this.handleInput}
            >
              Add
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}
