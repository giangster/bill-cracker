import { ADD_PARTICIPANT } from "../../actions/types";

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
    default:
      return state;
  }
}

export default participantReducer;
