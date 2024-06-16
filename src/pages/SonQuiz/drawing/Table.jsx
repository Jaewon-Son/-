import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import exampleImg from "./exampleImg.jpg";
import Line from "./Line";

//정답 설정
const answerLine = [
  { start: { x: 10, y: 3 }, end: { x: 9, y: 2 } },
  { start: { x: 9, y: 2 }, end: { x: 8, y: 1 } },
  { start: { x: 8, y: 1 }, end: { x: 7, y: 1 } },
  { start: { x: 7, y: 1 }, end: { x: 6, y: 1 } },
  { start: { x: 6, y: 1 }, end: { x: 5, y: 1 } },
  { start: { x: 5, y: 1 }, end: { x: 5, y: 2 } },
  { start: { x: 5, y: 2 }, end: { x: 5, y: 3 } },
  { start: { x: 5, y: 3 }, end: { x: 6, y: 4 } },
  { start: { x: 6, y: 4 }, end: { x: 7, y: 5 } },
  { start: { x: 7, y: 5 }, end: { x: 6, y: 6 } },
  { start: { x: 6, y: 6 }, end: { x: 5, y: 7 } },
  { start: { x: 5, y: 7 }, end: { x: 5, y: 8 } },
  { start: { x: 5, y: 8 }, end: { x: 5, y: 9 } },
  { start: { x: 5, y: 9 }, end: { x: 6, y: 9 } },
  { start: { x: 6, y: 9 }, end: { x: 7, y: 9 } },
  { start: { x: 7, y: 9 }, end: { x: 8, y: 9 } },
  { start: { x: 8, y: 9 }, end: { x: 9, y: 8 } },
  { start: { x: 9, y: 8 }, end: { x: 10, y: 7 } },
];

const Table = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const size = 10;
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (lines.length === answerLine.length) {
      const correct = lines.every((line) => {
        const mirroredLine = {
          start: { x: size - line.start.x, y: line.start.y },
          end: { x: size - line.end.x, y: line.end.y },
        };

        return answerLine.some(
          (ansLine) =>
            (ansLine.start.x === mirroredLine.start.x &&
              ansLine.start.y === mirroredLine.start.y &&
              ansLine.end.x === mirroredLine.end.x &&
              ansLine.end.y === mirroredLine.end.y) ||
            (ansLine.start.x === mirroredLine.end.x &&
              ansLine.start.y === mirroredLine.end.y &&
              ansLine.end.x === mirroredLine.start.x &&
              ansLine.end.y === mirroredLine.start.y)
        );
      });
      setIsCorrect(correct);
    }
  }, [lines]);

  const isClicked = (x, y, isRight) => {
    if (!isRight) {
      return;
    }
    const correctedX = x - size;
    if (selectedPoints.length === 1) {
      const newLine = { start: selectedPoints[0], end: { x: correctedX, y } };
      setLines([...lines, newLine]);
      setSelectedPoints([]);
    } else {
      setSelectedPoints([{ x: correctedX, y }]);
    }
  };

  const renderGrid = (isRight) => {
    let cells = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        cells.push(
          <div key={`${i},${j}`} className="cell">
            <div
              className="point top-left"
              onClick={() => isClicked(j + (isRight ? size : 0), i, isRight)}
            />
            <div
              className="point top-right"
              onClick={() =>
                isClicked(j + 1 + (isRight ? size : 0), i, isRight)
              }
            />
            <div
              className="point bottom-left"
              onClick={() =>
                isClicked(j + (isRight ? size : 0), i + 1, isRight)
              }
            />
            <div
              className="point bottom-right"
              onClick={() =>
                isClicked(j + 1 + (isRight ? size : 0), i + 1, isRight)
              }
            />
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <>
      <div className="container">
        <h1>다음의 보기와 같이 왼쪽 도형을 대칭하여 그려보세요.</h1>
        <img src={exampleImg} alt="sample"></img>
        <div className="table-container">
          <div className="table">
            {renderGrid(false)}
            {answerLine.map((line, index) => (
              <Line key={index} start={line.start} end={line.end} />
            ))}
          </div>
          <div className="table">
            {renderGrid(true)}
            {lines.map((line, index) => (
              <Line key={index} start={line.start} end={line.end} />
            ))}
          </div>
        </div>
        {isCorrect && <div className="result">정답입니다!!</div>}
        <button onClick={handleToMain} className="next-quiz-button">
          메인 페이지로
        </button>
      </div>
    </>
  );
};

export default Table;
