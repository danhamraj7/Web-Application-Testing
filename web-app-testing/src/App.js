import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

export const addByOne = value => {
  return value + 1;
};

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleFoul = () => {
    if (strikes <= 1) {
      setStrikes(() => addByOne(strikes));
    } else if (strikes === 2) {
      return;
    }
  };

  const handleBall = () => {
    if (balls < 4) {
      setBalls(() => addByOne(balls));
    } else {
      return setBalls(0);
    }
  };

  const handleHit = () => {
    setBalls(0);
    setStrikes(0);
  };

  const handleStrike = () => {
    if (strikes < 3) {
      setStrikes(() => addByOne(strikes));
    } else {
      setStrikes(0);
    }
  };

  return (
    <div className="App">
      <div className="displayContainer">
        <Display displayType="Balls" displayCount={balls} />

        <Display displayType="Strikes" displayCount={strikes} />
      </div>
      <Dashboard
        strike={handleStrike}
        ball={handleBall}
        foul={handleFoul}
        hit={handleHit}
      />
    </div>
  );
}

export default App;
