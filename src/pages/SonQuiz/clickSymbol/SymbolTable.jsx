import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Symbol.css";

const symbols = ["○", "★", "△", "▤", "▶"];
const SymbolTable = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const [tables, setTables] = useState([]);

  const [isEmpty, setIsEmpty] = useState(
    Array.from(Array(4), () => Array(4).fill(false))
  );
  const [isAnswer, setIsAnswer] = useState(false);

  const checkSame = (tables, row, col, symbol) => {
    for (let i = 0; i < 4; i++) {
      if (tables[row][i] === symbol && i !== col) {
        return true;
      }
      if (tables[i][col] === symbol && i !== row) {
        return true;
      }
    }
    return false;
  };

  const checkAllSame = (tables) => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          tables[row][col] === " " ||
          checkSame(tables, row, col, tables[row][col])
        ) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const makeTables = () => {
      const newTables = Array.from(Array(4), () => Array(4).fill(""));
      let emptyCount = 8;

      while (emptyCount > 0) {
        const row = Math.floor(Math.random() * 4);
        const col = Math.floor(Math.random() * 4);

        if (newTables[row][col] === "") {
          newTables[row][col] = " ";
          emptyCount--;
        }
      }

      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (newTables[row][col] === "") {
            let notUsed = symbols.filter(
              (symbol) => !checkSame(newTables, row, col, symbol)
            );

            newTables[row][col] =
              notUsed[Math.floor(Math.random() * notUsed.length)];
          }
        }
      }

      const newIsEmpty = Array.from(Array(4), () => Array(4).fill(false));
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (newTables[row][col] === " ") {
            newIsEmpty[row][col] = true;
          }
        }
      }
      return { tables: newTables, isEmpty: newIsEmpty };
    };

    const { tables: newTables, isEmpty: newEmpty } = makeTables();
    setTables(newTables);
    setIsEmpty(newEmpty);
  }, []);

  const handleCellClick = (row, col) => {
    if (isEmpty[row][col]) {
      setTables((prevTables) => {
        const newTables = prevTables.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => {
            if (rowIndex === row && colIndex === col) {
              const nowIndex = symbols.indexOf(cell);

              const nextSymbol = symbols[(nowIndex + 1) % symbols.length];
              return nextSymbol;
            }
            return cell;
          })
        );

        setIsAnswer(!checkAllSame(newTables));

        return newTables;
      });
    }
  };

  return (
    <>
      <div className="title">
        <h1>아래를 참고하여 문제를 풀어보세요</h1>
      </div>
      <div className="question-container">
        ▶가로 4칸, 세로 4칸으로 된 정사각형이 있습니다.
        <br />
        ▶제시된 기호를 참고하여 가로, 세로 줄에 각 기호가 중복되지 않도록
        <br />
        빈칸에 기호를 그려보세요.
        <br />
        ▶빈칸을 클릭하면 기호가 바뀝니다.
        <br />
        ▶새로고침시 새로운 문제를 풀 수 있습니다.
      </div>
      <div className="tables-container">
        {tables.map((row, rowIndex) => (
          <div key={rowIndex} className="tables-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`tables-cell ${
                  !isEmpty[rowIndex][colIndex] ? "prev" : ""
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                style={{
                  cursor: isEmpty[rowIndex][colIndex] ? "pointer" : "default",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
        {isAnswer && <div className="answer-text">정답입니다!!</div>}
        <button onClick={handleToMain} className="next-quiz-button">
          메인 페이지로
        </button>
      </div>
    </>
  );
};

export default SymbolTable;
