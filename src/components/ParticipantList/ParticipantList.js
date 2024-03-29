import React, { Component } from "react";
import "./ParticipantList.css";
import Result from "../Result/Result";
import Snackbar from "@material-ui/core/Snackbar";
import {
  addParticipant,
  removeAllParticipants,
  saveParticipant
} from "../../actions/participantList";
import { connect } from "react-redux";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import { TextField, Button } from "@material-ui/core";

class ParticipantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageOpenStatus: false,
      isResult: false,
      participantName: "",
      money: 0,
      description: ""
    };
  }

  isResult = () => {
    if (this.props.participants.length > 1) {
      this.props.isResult();
      this.setState({
        ...this.state,
        isResult: true
      });
    } else {
      this.setState({
        messageOpenStatus: true,
        message: "There has to be at least two participant"
      });
    }
  };

  handleInput = e => {
    e.preventDefault();
    //Early return technique
    //Validating input
    if (this.state.participantName === "" || this.state.money < 0) {
      this.setState({
        messageOpenStatus: true,
        message: "Name must not be empty and money must not be less than 0"
      });
      return;
    }
    let participant = {
      participantName: this.state.participantName,
      money: this.state.money,
      description: this.state.description
    };
    this.props.saveParticipant(participant);
    this.cleanInput();
  };

  cleanInput() {
    this.setState({
      participantName: "",
      money: 0,
      description: ""
    });
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ messageOpenStatus: false });
  };

  clearState = () => {
    this.props.isStart();
    this.props.removeAllParticipants();
    this.setState({ isResult: false });
  };

  render() {
    let members = [];

    this.props.participants.forEach(
      ({ participantName, money, description }, i) =>
        members.push(
          <div key={i}>
            <ParticipantItem
              participantName={participantName}
              money={money}
              description={description}
            />
          </div>
        )
    );

    return (
      <div>
        {this.props.isParticipantList && (
          <div>
            <p>
              <strong>{this.props.nameOfTrip}</strong>
            </p>
            <p>
              Okay. Let's add some more information before we can calculate your
              share!
            </p>
            <form onSubmit={this.handleInput} className="form">
              <TextField
                required
                name="participantName"
                label="Name"
                type="text"
                onChange={this.handleChange}
                value={this.state.participantName}
              />
              <br />
              <TextField
                required
                name="money"
                label="Spent money"
                type="number"
                onChange={this.handleChange}
                value={this.state.money}
              />
              <br />
              <TextField
                name="description"
                label="Description"
                type="text"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <br />
              <br />
              <Button
                type="submit"
                className="btn-primary"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </form>
            <div className="btn-container">
              <Button
                className="back-btn"
                variant="contained"
                color="default"
                onClick={this.clearState}
              >
                &laquo; Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="calculate-btn"
                onClick={this.isResult}
              >
                Calculate
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

            <hr />
            <div className="member-container">{members}</div>
          </div>
        )}
        {this.state.isResult && (
          <Result isResult={this.isResult} clearState={this.clearState} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participantList.participants
});

const mapDispatchToProps = dispatch => ({
  addParticipant: () => {
    dispatch(addParticipant());
  },
  removeAllParticipants: () => {
    dispatch(removeAllParticipants());
  },
  saveParticipant: object => {
    dispatch(saveParticipant(object));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantList);
