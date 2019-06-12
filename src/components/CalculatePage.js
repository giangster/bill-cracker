import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class CalculatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isStartPage: false, isCalculatePage: true };
  }

  render() {
    return (
      <div>
        {this.props.isCalculatePage && (
          <div>
            <p>
              Okay. Let's enter some data before we can calculate your expense!
            </p>
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
