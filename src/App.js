import React from "react";
import "./App.css";
import StartPage from "./components/StartPage";

function App() {
  return (
    <div
      className="App"
      style={
        {
          // backgroundImage:
          //   "url('https://gigaom.com/wp-content/uploads/sites/1/2012/05/fat-cat-money.jpg?w=300')",
          // backgroundRepeat: "repeat"
        }
      }
    >
      <h1 style={{ margin: 10 }}>Bill Cracker App</h1>
      <StartPage />
    </div>
  );
}

export default App;
