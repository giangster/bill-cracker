import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CalculatePage from "./CalculatePage";

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartPage: true,
      isCalculatePage: false,
      noOfMember: null,
      nameOfTrip: ""
    };
  }

  isCalculatePage = () => {
    this.setState({ ...this.state, isStartPage: false, isCalculatePage: true });
  };

  isStartPage = () => {
    this.setState({ ...this.state, isStartPage: true, isCalculatePage: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.isStartPage && (
          <div>
            <div>
              <TextField
                onChange={this.handleChange}
                autoFocus
                margin="dense"
                name="nameOfTrip"
                label="Trip name"
                type="text"
                placeholder="My awesome trip"
              />
            </div>
            <div>
              <TextField
                onChange={this.handleChange}
                autoFocus
                margin="dense"
                name="noOfMember"
                label="Number of people"
                type="number"
              />
            </div>
            <div style={{ margin: 15 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.isCalculatePage}
              >
                Let's go!
              </Button>
            </div>
          </div>
        )}
        {this.isCalculatePage && (
          <div>
            <CalculatePage
              isCalculatePage={this.state.isCalculatePage}
              isStartPage={this.isStartPage}
              nameOfTrip={this.state.nameOfTrip}
              noOfMember={this.state.noOfMember}
            />
          </div>
        )}
      </div>
    );
  }
}
