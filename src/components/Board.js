import React from "react";
import GameBoardRow from "./GameBoardRow";

function Board({ userName, currentScore, highScore, users }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {" "}
        <h2>Best Scores</h2>
        {users.map((user, idx) => {
          return (
            <li>
              UserName: {user} || Score:{currentScore}||{" "}
              {new Date().toLocaleDateString()}
            </li>
          );
        })}
      </div>
      <div className="gameboard">
        <GameBoardRow text="User Name" value={userName} />
        <GameBoardRow text="Current Score" value={currentScore} />
        <GameBoardRow text="High Score:" value={highScore} />
      </div>
    </div>
  );
}

export default Board;
