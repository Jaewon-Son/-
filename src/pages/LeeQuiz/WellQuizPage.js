import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../LeeQuiz/SubmitButton";
import "./WellQuizPage.css";
import wellAgingImg from "./images/well-aging.jpg";

const initialAnswers = [
  "노화에 순응 하면서도 오랫동안 건강을 유지하는 것",
  "양치질과 정기적인 치과검진",
  "규칙적인 운동",
  "골고루 먹는 균형 있는 식사",
];

const answers = [
  { question: "well-aging", answer: initialAnswers[0] },
  { question: "습관1", answer: initialAnswers[1] },
  { question: "습관2", answer: initialAnswers[2] },
  { question: "습관3", answer: initialAnswers[3] },
];

const WellQuizPage = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const [data, setData] = useState(Array(initialAnswers.length).fill(""));
  const [results, setResults] = useState(
    Array(initialAnswers.length).fill(null)
  );
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (isTimerRunning && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      setIsTimerRunning(false);
    }
  }, [isTimerRunning, seconds]);

  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  const handleResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div className="well-quiz-container">
      <header>
        <h1>오늘의 기사</h1>
        <h2>
          1분 동안 기사의 내용을 외우고 아래 빈칸에 알맞은 내용을 적고, 해당
          문제를 풀어보세요(1~2).
        </h2>
        {isTimerRunning && <div className="timer">남은 시간: {seconds}초</div>}
      </header>
      <div className="article">
        <table className="article-table">
          <thead>
            <tr>
              <th>
                하이닥 건강 뉴스 일부 발췌
                <span style={{ float: "right" }}>2014년 *월 *일 *요일</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="article-content">
                하루도 빠짐 없이 지켜야 하는 '건강 습관' 3가지
                <br />
                <br />
                <img
                  src={wellAgingImg}
                  alt="Well-aging"
                  className="article-image-right"
                />
                <br />
                '웰 에이징(well-aging)'이란{" "}
                {isTimerRunning ? (
                  initialAnswers[0]
                ) : (
                  <span
                    className="hidden-answer"
                    data-answer={initialAnswers[0]}
                  ></span>
                )}
                을 의미한다. 100세 시대인 지금 건강하게 나이 들기 위해서는 평소
                생활습관이 매우 중요하다. 성공적인 '웰 에이징(well-aging)'을
                위한 건강습관 3가지를 소개한다.
                <br />
                <br />
                첫째,{" "}
                {isTimerRunning ? (
                  initialAnswers[1]
                ) : (
                  <span
                    className="hidden-answer"
                    data-answer={initialAnswers[1]}
                  ></span>
                )}
                이다. 하루 4번(아침/점심/저녁 식사 후/취침 전), 음식물 섭취 3분
                안에, 3분 동안 하는 433 양치습관으로 구강을 깨끗하게 하고, 1년
                2회 정기적으로 치과를 가는 것이 중요하다.
                <br />
                <br />
                둘째,{" "}
                {isTimerRunning ? (
                  initialAnswers[2]
                ) : (
                  <span
                    className="hidden-answer"
                    data-answer={initialAnswers[2]}
                  ></span>
                )}
                이다. 운동은 무조건 많이 하는 것보다 자신에게 맞는 운동을 꾸준히
                30분 이상 무리하지 않고 하는 것이 중요하다.
                <br />
                <br />
                셋째,{" "}
                {isTimerRunning ? (
                  initialAnswers[3]
                ) : (
                  <span
                    className="hidden-answer"
                    data-answer={initialAnswers[3]}
                  ></span>
                )}
                이다. 음식을 위주로 한 식사보다는 채식, 콩, 현미, 견과류 등으로
                각종 질환의 발병 위험을 낮추고 균형 잡힌 식사를 하는 것이
                중요하다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {!isTimerRunning && (
        <div className="questions">
          <div className="question">
            <h4>1. '웰 에이징(well-aging)'이란 무엇인가요?</h4>
            <textarea
              placeholder="답변을 작성하세요..."
              value={data[0]}
              onChange={(e) => handleChange(0, e.target.value)}
            ></textarea>
            {results[0] !== null &&
              (results[0] ? (
                <div className="correct-answer">정답입니다!</div>
              ) : (
                <div className="incorrect-answer">
                  정답: {answers[0].answer}
                </div>
              ))}
          </div>
          <div className="question">
            <h4>
              2. 성공적인 '웰 에이징(well-aging)'을 위해 중요한 건강습관 3가지를
              적어보세요.
            </h4>
            <textarea
              placeholder="답변을 작성하세요..."
              value={data[1]}
              onChange={(e) => handleChange(1, e.target.value)}
            ></textarea>
            {results[1] !== null &&
              (results[1] ? (
                <div className="correct-answer">정답입니다!</div>
              ) : (
                <div className="incorrect-answer">
                  정답: {answers[1].answer}
                </div>
              ))}
            <textarea
              placeholder="답변을 작성하세요..."
              value={data[2]}
              onChange={(e) => handleChange(2, e.target.value)}
            ></textarea>
            {results[2] !== null &&
              (results[2] ? (
                <div className="correct-answer">정답입니다!</div>
              ) : (
                <div className="incorrect-answer">
                  정답: {answers[2].answer}
                </div>
              ))}
            <textarea
              placeholder="답변을 작성하세요..."
              value={data[3]}
              onChange={(e) => handleChange(3, e.target.value)}
            ></textarea>
            {results[3] !== null &&
              (results[3] ? (
                <div className="correct-answer">정답입니다!</div>
              ) : (
                <div className="incorrect-answer">
                  정답: {answers[3].answer}
                </div>
              ))}
          </div>
          <SubmitButton
            data={data}
            answers={answers}
            onSubmit={handleResults}
            isWellQuiz={true}
          />
          <br></br>
          <button onClick={handleToMain} className="next-quiz-button">
            메인 페이지로
          </button>
        </div>
      )}
    </div>
  );
};

export default WellQuizPage;
