import React from "react";
import "./App.css";
import StartPage from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ margin: 10, marginBottom: 30 }}>Bill Cracker App</h1>
      </div>
      <StartPage />
    </div>
  );
}

export default App;
