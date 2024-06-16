import React from "react";
import "./Line.css";

const Line = ({ start, end }) => {
  const x1 = start.x * 30;
  const y1 = start.y * 30;

  const x2 = end.x * 30;
  const y2 = end.y * 30;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  const style = {
    width: `${length}px`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: "0 0",
    top: `${y1}px`,
    left: `${x1}px`,
  };

  return <div className="line" style={style} />;
};

export default Line;
