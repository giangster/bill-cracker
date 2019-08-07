import { ADD_PARTICIPANT_ITEM, REMOVE_ALL_PARTICIPANTS } from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT_ITEM, payload: 1 };
};

export const removeAllParticipants = () => {
  return { type: REMOVE_ALL_PARTICIPANTS, payload: {} };
};
