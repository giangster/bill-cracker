import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CalculatePage from "./CalculatePage";

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isStartPage: true, isCalculatePage: false };
  }

  isCalculatePage = () => {
    this.setState({ ...this.state, isStartPage: false, isCalculatePage: true });
  };

  isStartPage = () => {
    this.setState({ ...this.state, isStartPage: true, isCalculatePage: false });
  };

  render() {
    return (
      <div>
        {this.state.isStartPage && (
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
            />
          </div>
        )}
      </div>
    );
  }
}
