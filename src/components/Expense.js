import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "react-table/react-table.css";

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharePerPerson: 0,
      result: []
    };
  }

  //Algorithm to calculate the share for each person
  componentDidMount = () => {
    this.props.isNotCalculatePage();
    var dataTemp = this.props.data;
    console.log(dataTemp);
    dataTemp.sort(function(participant1, participant2) {
      return participant1.money - participant2.money;
    });
    var total = 0;

    dataTemp.forEach(function(item) {
      total = total + parseFloat(item.money);
    });
    var share = (total / this.props.data.length).toFixed(2);

    this.setState({ sharePerPerson: share });

    var balanceGeneral = [];
    var participant = [];
    dataTemp.forEach(function(item) {
      balanceGeneral.push(parseFloat(item.money) - share);
      participant.push(item.participant);
    });

    let i = 0;
    let j = participant.length - 1;
    let debt;
    let result = [];
    while (i < j) {
      debt = Math.min(Math.abs(balanceGeneral[i], balanceGeneral[j]));
      result.push(`${participant[i]} owes ${participant[j]} ${debt} euros.`);

      balanceGeneral[i] += debt;
      balanceGeneral[j] -= debt;
      balanceGeneral[i] === 0 ? i++ : j--;
    }
    this.setState({ result: result });
  };

  isStartPage = () => {
    this.setState({
      ...this.state,
      isResultPage: false,
      isStartPage: true
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

    let data = this.props.data.map((data, index) => (
      <div style={divStyle}>
        <div style={{ fontSize: 20 }}>
          {data.participant} pays {data.money} euros
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
        <div class="split left" style={{ margin: 0 }}>
          <div class="centered"> {data}</div>
        </div>
        <div class="split right">
          <div class="centered">
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
              onClick={this.isStartPage}
            >
              Back to start page
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
