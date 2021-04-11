import React from "react";

function GameBoardRow({ text, value }) {
  return (
    <div className="row">
      <div>{text}</div>
      <div> {value}</div>
    </div>
  );
}

export default GameBoardRow;
