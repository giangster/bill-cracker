import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class StartPage extends Component {
  render() {
    return (
      <div>
        <div>
          <TextField
            label="Trip name"
            type="text"
            placeholder="My awesome trip"
          />
        </div>
        <div>
          <TextField label="Number of people" type="number" />
        </div>
        <div style={{ margin: 15 }}>
          <Button color="primary">Let's go!</Button>
        </div>
      </div>
    );
  }
}
