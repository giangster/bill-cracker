import {
  ADD_PARTICIPANT,
  REMOVE_ALL_PARTICIPANTS,
  DATA_COLLECT
} from "../actions/types";

const initialState = {
  participants: []
};

function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, {}]
      };
    case REMOVE_ALL_PARTICIPANTS:
      return {
        ...state,
        participants: []
      };
    case DATA_COLLECT:
      return {
        ...state,
        participants: [...state.participants, action.payload]
      };
    default:
      return state;
  }
}

export default participantReducer;
