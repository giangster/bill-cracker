import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ParticipantList from "../ParticipantList/ParticipantList";
import Snackbar from "@material-ui/core/Snackbar";
import "./Start.css";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isStart: true,
      isParticipantList: false,
      nameOfTrip: ""
    };
  }

  isStart = () => {
    this.setState({
      isStart: true,
      isParticipantList: false,
      nameOfTrip: undefined
    });
  };

  isParticipantList = () => {
    this.state.nameOfTrip !== ""
      ? this.setState({
          ...this.state,
          isStart: false,
          isParticipantList: true
        })
      : this.setState({
          messageOpenStatus: true,
          message: "Trip name is required"
        });
  };

  isResult = () => {
    this.setState({ ...this.state, isParticipantList: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.isParticipantList();
    }
  };

  render() {
    return (
      <div>
        {this.state.isStart && (
          <div className="trip-name-container">
            <div className="trip-name">
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
                variant="contained"
                color="primary"
                onClick={this.isParticipantList}
                className="btn-primary"
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
        {this.isParticipantList && (
          <div>
            <ParticipantList
              isStart={this.isStart}
              isParticipantList={this.state.isParticipantList}
              isResult={this.isResult}
              nameOfTrip={this.state.nameOfTrip}
            />
          </div>
        )}
      </div>
    );
  }
}
