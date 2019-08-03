import { DATA_COLLECT, Result_CAL } from "./types";

export const collectData = object => {
  return { type: DATA_COLLECT, payload: object };
};

export const calculateResult = data => {
  return { type: Result_CAL, payload: data };
};
