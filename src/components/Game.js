import React, { useState, useEffect } from "react";
import Bulb from "./Bulb";

function Game({
  isGameOn,
  setCurrentScore,
  setHighScore,
  currentScore,
  highScore,
  setUsers,
  userName,
}) {
  const [bulbArray, setBulbArray] = useState([
    { isOn: false, color: "#fff" },
    { isOn: false },
    { isOn: false },
    { isOn: false },
    { isOn: false },
    { isOn: false },
  ]);

  const [bulbQueue, setBulbQueue] = useState([]);
  const [currentRound, setCurrentRound] = useState([]);

  useEffect(() => {
    for (let i = 0; i < bulbQueue.length; i++) {
      turnBulbOn(bulbQueue[i], i);
    }
  }, [bulbQueue]);

  const start = () => {
    setCurrentRound(0);
    setBulbArray([
      { isOn: false },
      { isOn: false },
      { isOn: false },
      { isOn: false },
      { isOn: false },
      { isOn: false },
    ]);
    setBulbQueue([]);
    setCurrentRound([]);
    setCurrentScore(0);
    round();
  };
  const turnBulbOn = (bulb, index) => {
    setTimeout(() => {
      const newArray = [...bulbArray];
      newArray[bulb].isOn = true;
      setBulbArray(newArray);
    }, 1500 * index);
  };

  const round = () => {
    const array = [];
    for (let i = bulbQueue.length; i <= bulbQueue.length; i++) {
      array.push(getRandomBulb());
    }
    setBulbQueue([...bulbQueue, ...array]);
    setCurrentRound([...bulbQueue, ...array]);
  };

  const getRandomBulb = () => {
    return Math.floor(Math.random() * 6);
  };

  const turnOff = (index) => {
    const newArray = [...bulbArray];
    newArray[index].isOn = false;
    setBulbArray(newArray);
  };

  const userClick = (index) => {
    const newArray = [...currentRound];

    if (newArray[0] === index) {
      newArray.shift();
      setCurrentRound(newArray);
      if (newArray.length === 0) {
        setCurrentScore((prev) => prev + 10);
        if (highScore < currentScore + 10) {
          setHighScore(currentScore + 10);
        }
        round();
      }
    } else {
      console.log("game over");
      setUsers((oldArray) => [...oldArray, userName]);
    }
  };

  const isStartEnabled = () => {
    for (let i = 0; i < bulbArray.length; i++) {
      if (bulbArray[i].isOn === true) {
        return true;
      }
    }
    return false;
  };

  return (
    isGameOn && (
      <React.Fragment>
        <button disabled={isStartEnabled()} onClick={start}>
          Start
        </button>

        <div className="playboard">
          <div className="circle-container">
            {bulbArray.map((bulb, idx) => {
              return (
                <Bulb
                  key={idx}
                  bulb={bulb}
                  idx={idx}
                  turnOff={turnOff}
                  userClick={userClick}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    )
  );
}

export default Game;
