import { SAVE_PARTICIPANT } from "./types";

export const collectData = object => {
  return { type: SAVE_PARTICIPANT, payload: object };
};
