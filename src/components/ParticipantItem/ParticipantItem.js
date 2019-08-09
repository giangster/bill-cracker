import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const ParticipantItem = ({ participantName, money, description }) => {
  return (
    <div>
      <FormControl style={{ borderStyle: "solid", borderColor: "blue" }}>
        <TextField
          name="participantName"
          label="Name"
          type="text"
          value={participantName}
        />
        <TextField
          name="money"
          label="Spent money"
          type="number"
          value={money}
        />
        <TextField
          name="description"
          label="Description"
          type="text"
          value={description}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: 15,
              margin: "auto",
              marginTop: 15,
              backgroundImage:
                "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
            }}
          >
            Edit
          </Button>
        </div>
      </FormControl>
    </div>
  );
};
export default ParticipantItem;
