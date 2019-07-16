import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CalculatePage from "./CalculatePage";
import Snackbar from "@material-ui/core/Snackbar";

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isStartPage: true,
      isCalculatePage: false,
      nameOfTrip: ""
    };
  }

  isCalculatePage = () => {
    this.state.nameOfTrip !== ""
      ? this.setState({
          ...this.state,
          isStartPage: false,
          isCalculatePage: true
        })
      : this.setState({
          messageOpenStatus: true,
          message: "Trip name is required"
        });
  };

  isNotCalculatePage = () => {
    this.setState({ ...this.state, isCalculatePage: false });
  };

  isStartPage = () => {
    this.setState({
      ...this.state,
      isStartPage: true,
      isCalculatePage: false,
      nameOfTrip: undefined
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.isCalculatePage();
    }
  };

  render() {
    return (
      <div>
        {this.state.isStartPage && (
          <div style={{ height: 400 }}>
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
              <div>
                <TextField
                  required
                  onKeyDown={this.keyPress}
                  onChange={this.handleChange}
                  autoFocus
                  margin="dense"
                  name="nameOfTrip"
                  label="Trip name"
                  type="text"
                  placeholder="My awesome trip"
                />
              </div>
            </div>
            <div style={{ margin: 15 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.isCalculatePage}
                style={{
                  backgroundImage:
                    "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
                }}
              >
                Let's go!
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                open={this.state.messageOpenStatus}
                autoHideDuration={2000}
                onClose={this.handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={this.state.message}
              />
            </div>
          </div>
        )}
        {this.isCalculatePage && (
          <div>
            <CalculatePage
              isCalculatePage={this.state.isCalculatePage}
              isNotCalculatePage={this.isNotCalculatePage}
              isStartPage={this.isStartPage}
              nameOfTrip={this.state.nameOfTrip}
            />
          </div>
        )}
      </div>
    );
  }
}
