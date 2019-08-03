import { ADD_PARTICIPANT, REMOVE_ALL_PARTICIPANTS } from "../../actions/types";

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
    default:
      return state;
  }
}

export default participantReducer;
