import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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
    this.setState({
      sharePerPerson: calculateAverage(this.props.participants).toFixed(2)
    });
    this.setState({ result: calculateShare(this.props.participants) });
    this.props.isResult();
  };

  isStart = () => {
    this.props.clearState();
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

export const calculateShare = participants => {
  let participantsTemp = [...participants];

  participantsTemp.sort((participant1, participant2) => {
    return participant1.money - participant2.money;
  });

  let share = calculateAverage(participantsTemp).toFixed(2);

  let balanceGeneral = [];
  let participant = [];
  participantsTemp.forEach(item => {
    balanceGeneral.push(parseFloat(item.money) - share);
    console.log(balanceGeneral);
    participant.push(item.participantName);
  });

  let i = 0;
  let j = participant.length - 1;
  console.log(i, j);
  let debt;
  let result = [];
  while (i < j) {
    debt = Math.min(Math.abs(balanceGeneral[i]), Math.abs(balanceGeneral[j]));
    console.log(debt, balanceGeneral[i], balanceGeneral[j]);
    if (debt > 0) {
      result.push(
        `${participant[i]} owes ${participant[j]} ${debt.toFixed(2)} euros.`
      );
      console.log(result);
    }
    debt = parseFloat(debt);

    balanceGeneral[i] += debt;
    balanceGeneral[j] -= debt;

    balanceGeneral[i] === 0 ? i++ : j--;
  }

  return result;
};

export const calculateAverage = participants => {
  let moneys = participants.map(participant => parseFloat(participant.money));
  let sum = moneys.reduce((m1, m2) => m1 + m2, 0);
  return sum / moneys.length;
};

const mapStateToProps = state => ({
  participants: state.participantList.participants
});

export default connect(mapStateToProps)(Result);
