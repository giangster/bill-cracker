import { combineReducers } from "redux";
import participantReducer from "../components/ParticipantList/participantListReducer";

export default combineReducers({
  participantList: participantReducer
});
