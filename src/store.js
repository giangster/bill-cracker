import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {};

const reduxDevTool = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, initialState, reduxDevTool);

export default store;
