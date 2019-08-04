import { DATA_COLLECT } from "./types";

export const collectData = object => {
  return { type: DATA_COLLECT, payload: object };
};
