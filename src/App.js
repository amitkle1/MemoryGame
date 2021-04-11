import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Game from "./components/Game";
import Welcome from "./components/Welcome";

function App() {
  const [userName, setUserName] = useState("");
  const [isGameOn, setIsGameOn] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Welcome
        setIsGameOn={setIsGameOn}
        userName={userName}
        setUserName={setUserName}
        setUsers={setUsers}
      />
      <Board
        userName={userName}
        currentScore={currentScore}
        highScore={highScore}
        users={users}
      />

      <Game
        isGameOn={isGameOn}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        currentScore={currentScore}
        highScore={highScore}
        setUsers={setUsers}
        userName={userName}
      />
    </div>
  );
}

export default App;
