import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isStartPage: false, isCalculatePage: true };
  }

  render() {
    var members = [];
    for (var i = 0; i < this.props.noOfMember; i++) {
      members.push(
        <FormControl>
          <TextField label="Name" type="text" />
          <TextField label="Spent money" type="number" />
        </FormControl>
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
            {members}
            <div style={{ margin: 15 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.isStartPage}
              >
                &laquo; Back
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
