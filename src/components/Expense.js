import React, { Component } from "react";

export default class Expense extends Component {
  shareCalculate = props => {
    var total = 0;
    for (let i = 0; i < props.data.length; i++) {
      total = total + props.data[i].money;
    }
    var sharePerPerson = total / 4;
    let balanceGeneral = [];
    for (let i = 0; i < props.data.length; i++) {
      let balance = props.data[i].money - sharePerPerson;
      balanceGeneral.push(balance);
    }
    return balanceGeneral;
  };
  render() {
    return (
      <div>
        <p>Here's the calculation.</p>
      </div>
    );
  }
}
