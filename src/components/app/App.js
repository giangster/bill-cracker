import React from "react";
import "./App.css";
import StartPage from "../StartPage/StartPage";
import { Provider } from "react-redux";
import store from "../../store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <h1 style={{ margin: 10, marginBottom: 30 }}>Bill Cracker App</h1>
        </div>
        <StartPage />
      </div>
    </Provider>
  );
}

export default App;
