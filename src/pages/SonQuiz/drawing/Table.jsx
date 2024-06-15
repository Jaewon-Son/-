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
//메인
const Table = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const size = 10; //표 크기 10*10으로 하기
  const [selectedPoints, setSelectedPoints] = useState([]); //선택된 점들을 저장하는 State
  const [lines, setLines] = useState([]); //그려진 선들을 저장하는 State
  const [isCorrect, setIsCorrect] = useState(false); //정답 여부를 저장하는 State

  //선이 생성될 때마다 실행
  useEffect(() => {
    //정답과 선의 개수가 맞으면?
    if (lines.length === answerLine.length) {
      //모든 선 검사
      const correct = lines.every((line) => {
        const mirroredLine = {
          //좌우대칭으로 바꾸기
          start: { x: size - line.start.x, y: line.start.y },
          end: { x: size - line.end.x, y: line.end.y },
        };
        //모든 선이 정답과 같다면
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
      setIsCorrect(correct); //정답 상태로 변경
    }
  }, [lines]); //선이 변경될 때마다 실행

  //점 클릭시
  const isClicked = (x, y, isRight) => {
    if (!isRight) {
      //왼쪽은 클릭했을때 실행 안하고 바로 리턴
      return;
    }
    const correctedX = x - size; //오른쪽 표의 좌표를 조정
    if (selectedPoints.length === 1) {
      //하나의 점을 이미 선택했을때 선 생성
      const newLine = { start: selectedPoints[0], end: { x: correctedX, y } };
      setLines([...lines, newLine]);
      setSelectedPoints([]); // 선택된 점 초기화
    } else {
      //점이 선택되지 않은 상태라면 새로운 점을 선택
      setSelectedPoints([{ x: correctedX, y }]);
    }
  };

  //표 렌더링
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
            {/* 왼쪽 표 표시, 클릭 안되게 막기*/}
            {renderGrid(false)}
            {/* 정답선 표시 */}
            {answerLine.map((line, index) => (
              <Line key={index} start={line.start} end={line.end} />
            ))}
          </div>
          <div className="table">
            {/* 오른쪽 표 렌더링 */}
            {renderGrid(true)}
            {/* 그려진 선 렌더링 */}
            {lines.map((line, index) => (
              <Line key={index} start={line.start} end={line.end} />
            ))}
          </div>
        </div>
        {/* 조건부 렌더링 */}
        {isCorrect && <div className="result">정답입니다!!</div>}
        <button onClick={handleToMain} className="next-quiz-button">
          메인 페이지로
        </button>
      </div>
    </>
  );
};

export default Table;
