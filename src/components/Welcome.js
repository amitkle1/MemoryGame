import React from "react";

function Welcome({ userName, setUserName, setIsGameOn, setUsers }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userName !== "") setIsGameOn(true);
  };
  return (
    <div>
      <h1>Welcome to my Memory Game</h1>
      <label>Please enter your name: </label>
      <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
      <button type="submit" onClick={(e) => onSubmitHandler(e)}>
        Submit
      </button>
    </div>
  );
}

export default Welcome;
