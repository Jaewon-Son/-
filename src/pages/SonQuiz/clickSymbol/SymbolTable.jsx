import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Symbol.css";

const symbols = ["○", "★", "△", "▤", "▶"]; // 사용할 기호 배열 정의

const SymbolTable = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const [tables, setTables] = useState([]);
  //빈칸인지 확인하는 State
  const [isEmpty, setIsEmpty] = useState(
    Array.from(Array(4), () => Array(4).fill(false))
  );
  const [isAnswer, setIsAnswer] = useState(false); //정답여부 State

  //가로 세로에 중복 확인
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

  //전체 중복 검사
  const checkAllSame = (tables) => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        //비어있지 않고 중복이 없어야 함
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
    //테이블 생성
    const makeTables = () => {
      //4*4 사이즈로 생성
      const newTables = Array.from(Array(4), () => Array(4).fill(""));
      let emptyCount = 8;
      //8칸만 랜덤으로 빈칸으로 만들기
      while (emptyCount > 0) {
        const row = Math.floor(Math.random() * 4);
        const col = Math.floor(Math.random() * 4);
        //아무것도 들어있지 않은 경우에만 실행
        if (newTables[row][col] === "") {
          newTables[row][col] = " ";
          emptyCount--;
        }
      }

      //남은 칸들 채우기
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (newTables[row][col] === "") {
            //중복되지 않은(아직 사용하지 않은)기호 저장
            let notUsed = symbols.filter(
              (symbol) => !checkSame(newTables, row, col, symbol)
            );
            //중복되지 않은 기호 중 랜덤으로 넣기
            newTables[row][col] =
              notUsed[Math.floor(Math.random() * notUsed.length)];
          }
        }
      }
      //빈칸 구분하기(이미 있는 칸에 클릭 이벤트를 빼기 위해서)
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

    //초기화
    const { tables: newTables, isEmpty: newEmpty } = makeTables();
    setTables(newTables);
    setIsEmpty(newEmpty);
  }, []);

  //클릭 이벤트 설정
  const handleCellClick = (row, col) => {
    if (isEmpty[row][col]) {
      //빈칸에만 클릭 이벤트 넣기
      setTables((prevTables) => {
        //값이 바뀐 테이블을 반환
        const newTables = prevTables.map((rowArr, rowIndex) =>
          rowArr.map((cell, colIndex) => {
            if (rowIndex === row && colIndex === col) {
              const nowIndex = symbols.indexOf(cell);
              //다음 기호 리턴
              const nextSymbol = symbols[(nowIndex + 1) % symbols.length];
              return nextSymbol;
            }
            return cell; //바뀐 기호의 셀 반환
          })
        );
        //표 전체 검사
        setIsAnswer(!checkAllSame(newTables));
        //새로운 테이블 반환
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
