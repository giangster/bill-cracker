import { ADD_PARTICIPANT, DATA_COLLECT, Result_CAL } from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT, payload: 1 };
};

export const collectData = object => {
  return { type: DATA_COLLECT, payload: object };
};

export const calculateResult = data => {
  return { type: Result_CAL, payload: data };
};
