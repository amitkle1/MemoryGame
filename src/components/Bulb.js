import React, { useEffect } from "react";
import circle from "../assets/circle.png";

function Bulb({ bulb, turnOff, idx, userClick }) {
  useEffect(() => {
    if (bulb.isOn === true) {
      setTimeout(() => {
        turnOff(idx);
      }, 1000);
    }
  }, [bulb.isOn]);

  return (
    <img
      src={circle}
      alt="circle"
      className={bulb.isOn ? "bulb-on" : "bulb"}
      style={{ color: "#000" }}
      onClick={() => userClick(idx)}
    />
  );
}

export default Bulb;
