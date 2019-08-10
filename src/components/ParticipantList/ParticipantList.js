import React, { Component } from "react";
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
    this.setState({ isResultPage: false });
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
            <form onSubmit={this.handleInput}>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  width: 10,
                  margin: 15,
                  backgroundImage:
                    "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
                }}
              >
                Save
              </Button>
            </form>
            <div style={{ margin: "auto" }}>
              <Button
                style={{ marginLeft: 15 }}
                variant="contained"
                color="default"
                onClick={this.clearState}
              >
                &laquo; Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: 15,
                  backgroundImage:
                    "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
                }}
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
            <br />
            <hr />
            <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
              {members}
            </div>
          </div>
        )}
        {this.state.isResult && <Result isResult={this.isResult} />}
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
