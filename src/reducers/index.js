import { combineReducers } from "redux";
import participantReducer from "./participantListReducer";

export default combineReducers({
  participantList: participantReducer
});
