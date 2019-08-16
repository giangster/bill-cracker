import React from "react";
import "./App.css";
import Start from "../Start/Start";
import { Provider } from "react-redux";
import store from "../../store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <h1>Bill Cracker App</h1>
        </div>
        <Start />
      </div>
    </Provider>
  );
}

export default App;
