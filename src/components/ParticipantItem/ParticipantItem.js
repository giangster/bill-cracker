import React from "react";

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
    </div>
  );
};
export default ParticipantItem;
