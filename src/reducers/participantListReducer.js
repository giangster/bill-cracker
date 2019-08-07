import {
  ADD_PARTICIPANT_ITEM,
  REMOVE_ALL_PARTICIPANTS,
  SAVE_PARTICIPANT
} from "../actions/types";

const initialState = {
  participants: []
};

function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT_ITEM:
      return {
        ...state,
        participants: [...state.participants, {}]
      };
    case REMOVE_ALL_PARTICIPANTS:
      return {
        ...state,
        participants: []
      };
    case SAVE_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload]
      };
    default:
      return state;
  }
}

export default participantReducer;
