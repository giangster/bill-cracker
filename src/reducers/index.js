import { combineReducers } from "redux";
import participantReducer from "./participantList";

export default combineReducers({
  participantList: participantReducer
});
