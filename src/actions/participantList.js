import {
  ADD_PARTICIPANT_ITEM,
  REMOVE_ALL_PARTICIPANTS,
  SAVE_PARTICIPANT
} from "./types";

export const addParticipant = () => {
  return { type: ADD_PARTICIPANT_ITEM };
};

export const removeAllParticipants = () => {
  return { type: REMOVE_ALL_PARTICIPANTS, payload: {} };
};

export const saveParticipant = object => {
  return { type: SAVE_PARTICIPANT, payload: object };
};
