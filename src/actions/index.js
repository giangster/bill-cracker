import { ADD_PARTICIPANT, DATA_COLLECT } from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT, payload: 1 };
};

export const collectData = object => {
  return { type: DATA_COLLECT, payload: object };
};
