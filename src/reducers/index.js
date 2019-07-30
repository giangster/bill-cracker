import { ADD_PARTICIPANT } from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  participants: [],
  noOfMember: 0
};

function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      const newNoOfMember = state.noOfMember + action.payload;
      return {
        ...state,
        noOfMember: newNoOfMember
      };
    default:
      return state;
  }
}

export default combineReducers({
  participanti: participantReducer
});
