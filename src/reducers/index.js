import { ADD_PARTICIPANT } from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  participants: []
};

function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload]
      };
    default:
      return state;
  }
}

export default combineReducers({
  pecpec: participantReducer
});
