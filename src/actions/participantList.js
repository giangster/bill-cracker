import { ADD_PARTICIPANT, REMOVE_ALL_PARTICIPANTS } from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT, payload: 1 };
};

export const removeAllParticipants = () => {
  return { type: REMOVE_ALL_PARTICIPANTS, payload: {} };
};
