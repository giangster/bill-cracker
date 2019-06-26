import React, { Component } from "react";

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharePerPerson: 0
    };
  }

  componentDidMount = () => {
    var total = 0;

    this.props.data.forEach(function(item) {
      total = total + parseFloat(item.money);
    });
    var share = total / this.props.data.length;

    // console.log(share);
    this.setState({ sharePerPerson: share });

    // console.log(this.state.sharePerPerson);
    var balanceGeneral = [];
    this.props.data.forEach(function(item) {
      balanceGeneral.push(parseFloat(item.money) - share);
    });

    console.log(balanceGeneral);
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
