import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "react-table/react-table.css";
import { connect } from "react-redux";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharePerPerson: 0,
      result: []
    };
  }

  //Algorithm to calculate the share for each person
  componentDidMount = () => {
    this.props.isNotParticipantList();
    var dataTemp = this.props.participants;
    console.log(dataTemp);
    dataTemp.sort(function(participant1, participant2) {
      return participant1.money - participant2.money;
    });
    var total = 0;

    dataTemp.forEach(item => {
      total = total + parseFloat(item.money);
    });
    var share = (total / this.props.participants.length).toFixed(2);

    this.setState({ sharePerPerson: share });

    var balanceGeneral = [];
    var participant = [];
    dataTemp.forEach(item => {
      balanceGeneral.push(parseFloat(item.money) - share);
      participant.push(item.participant);
    });

    let i = 0;
    let j = participant.length - 1;
    let debt;
    let result = [];
    while (i < j) {
      debt = Math.min(Math.abs(balanceGeneral[i], balanceGeneral[j])).toFixed(
        2
      );
      result.push(`${participant[i]} owes ${participant[j]} ${debt} euros.`);

      balanceGeneral[i] += debt;
      balanceGeneral[j] -= debt;
      balanceGeneral[i] === 0 ? i++ : j--;
    }
    this.setState({ result: result });
  };

  isStart = () => {
    this.setState({
      ...this.state,
      isResultPage: false,
      isStart: true
    });
  };

  render() {
    let statementList = this.state.result.map((statement, index) => (
      <li key={index}>{statement}</li>
    ));
    const divStyle = {
      display: "block",
      width: 200,
      borderStyle: "solid",
      borderColor: "lightGrey",
      borderRadius: 3,
      borderWidth: 1,
      margin: 20,
      padding: 5
    };

    let finalResult = this.props.participants.map((participant, index) => (
      <div style={divStyle} key={index}>
        <div style={{ fontSize: 20 }} key={index}>
          {participant.participantName} pays {participant.money} euros
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)",
            margin: 7
          }}
        >
          Edit
        </Button>
      </div>
    ));

    return (
      <div style={{ display: "inline-block" }}>
        <div className="split left" style={{ margin: 0 }}>
          <div className="centered"> {finalResult}</div>
        </div>
        <div className="split right">
          <div className="centered">
            <strong style={{ fontSize: 30 }}>Here's the calculation:</strong>
            <p style={{ fontSize: 20 }}>
              Each person's share is {this.state.sharePerPerson} euros.
            </p>
            <p style={{ fontSize: 20 }}>Therefore:</p>
            <ul style={{ listStyleType: "none", fontSize: 20 }}>
              {statementList}
            </ul>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
              }}
              onClick={this.isStart}
            >
              Back to start page
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  participants: state.participantList.participants
});

export default connect(mapStateToProps)(Result);
