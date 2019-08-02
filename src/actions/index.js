import { ADD_PARTICIPANT, DATA_COLLECT, EXPENSE_CAL } from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT, payload: 1 };
};

export const collectData = object => {
  return { type: DATA_COLLECT, payload: object };
};

export const calculateExpense = data => {
  return { type: EXPENSE_CAL, payload: data };
};
