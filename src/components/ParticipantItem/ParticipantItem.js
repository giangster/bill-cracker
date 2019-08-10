import React from "react";
import Button from "@material-ui/core/Button";

const ParticipantItem = ({ participantName, money, description }) => {
  return (
    <div style={{ width: 250, margin: 30 }}>
      <p>
        <strong>Name: </strong> {participantName}
      </p>
      <p>
        <strong>Money paid: </strong> {money}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>

      <div>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: 10,
            margin: "auto",
            marginTop: 15,
            backgroundImage:
              "linear-gradient(to right bottom, #2196f3, #2985e5, #3174d6, #3962c6, #3f51b5)"
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};
export default ParticipantItem;
