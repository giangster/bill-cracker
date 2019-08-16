import React from "react";
import "./ParticipantItem.css";

const ParticipantItem = ({ participantName, money, description }) => {
  return (
    <div className="participant-item-container">
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
