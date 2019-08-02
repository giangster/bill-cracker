import { ADD_PARTICIPANT } from "../actions/types";
import { DATA_COLLECT } from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  participants: [],
  noOfMember: 0,
  sharePerPerson: 0,
  result: []
};

function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      const newNoOfMember = state.noOfMember + action.payload;
      return {
        ...state,
        noOfMember: newNoOfMember
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

export default combineReducers({
  participanti: participantReducer
});
