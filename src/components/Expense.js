import React, { Component } from "react";

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharePerPerson: 0,
      result: ""
    };
  }

  componentDidMount = () => {
    var dataTemp = this.props.data;
    dataTemp.sort(function(participant1, participant2) {
      return participant1.money - participant2.money;
    });
    var total = 0;

    dataTemp.forEach(function(item) {
      total = total + parseFloat(item.money);
    });
    var share = total / this.props.data.length;

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

    while (i < j) {
      debt = Math.min(Math.abs(balanceGeneral[i], balanceGeneral[j]));
      console.log();
      balanceGeneral[i] += debt;
      balanceGeneral[j] -= debt;
      balanceGeneral[i] === 0 ? i++ : j--;
    }
  };

  render() {
    return (
      <div>
        <p>Here's the calculation:</p>
        <p>Each person's share is {this.state.sharePerPerson}</p>
        <p>Therefore</p>
      </div>
    );
  }
}
