import { ADD_PARTICIPANT } from "./types";

export const addParticipant = participant => dispatch => {
  dispatch({
    type: ADD_PARTICIPANT,
    payload: participant
  });
};
