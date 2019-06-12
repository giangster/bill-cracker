import React from "react";
import TextField from "@material-ui/core/TextField";

const Expense = props => {
  return (
    <div>
      <TextField label="Trip name" type="text" placeholder="My awesome trip" />
    </div>
  );
};

export default Expense;
