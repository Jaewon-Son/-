import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 키위 from "./images/키위.jpg";
import 양배추 from "./images/양배추.jpg";
import 자두 from "./images/자두.jpg";
import 현미 from "./images/현미.jpg";
import 팥 from "./images/팥.jpg";
import 오이 from "./images/오이.jpg";
import { Link } from "react-router-dom";
import "./css/Q14.css";

const Q14 = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const correctAnswers = {
    팥: "팥",
    양배추: "양배추",
    키위: "키위",
    현미: "현미",
    오이: "오이",
    자두: "자두",
  };

  const [data, setData] = useState([
    { ans: "" },
    { ans: "" },
    { ans: "" },
    { ans: "" },
    { ans: "" },
    { ans: "" },
  ]);
  const [isAllIncluded, setIsAllIncluded] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userAnswers = data.map((item) => item.ans.trim());

    const correctAnswersArray = Object.values(correctAnswers);

    const allCorrect = correctAnswersArray.every((answer) =>
      userAnswers.includes(answer)
    );
    if (
      allCorrect &&
      userAnswers.length === Object.keys(correctAnswers).length
    ) {
      setResultMessage("정답입니다! 메인 화면으로 돌아갑니다.");
      setIsAllIncluded(true);
    } else {
      setResultMessage("틀렸습니다. 다시 한번 풀어보세요.");
      setIsAllIncluded(false);
    }
  };
  const handleInputChange = (index, value) => {
    const newData = [...data];
    newData[index].ans = value;
    setData(newData);
  };

  return (
    <div>
      <center>
        <h2>앞서 기억해 둔 변비에 좋은 식품을 적어보세요.</h2>
        <div className="table-container">
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                {data
                  .reduce((acc, item, index, array) => {
                    if (index % 2 === 0) {
                      const nextItem = array[index + 1];
                      acc.push([item, nextItem]);
                    }
                    return acc;
                  }, [])
                  .map((rowItems, rowIndex) => (
                    <tr className="border" kew={rowIndex}>
                      {rowItems.map((item, itemIndex) => (
                        <td className="border">
                          <input
                            className={"no-border"}
                            type="text"
                            placeholder="채소 입력"
                            value={item.ans}
                            onChange={(e) =>
                              handleInputChange(
                                rowIndex * 2 + itemIndex,
                                e.target.value
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
            <button type="submit">제출</button>
          </form>
        </div>

        <h2>
          <center>변비에 좋은 식품을 기억해 주세요</center>
        </h2>
        <center>
          <p>{resultMessage}</p>
          {isAllIncluded && <Link to="/ParkQuiz/Q11">처음으로</Link>}
        </center>
        <button onClick={handleToMain} className="next-quiz-button">
        메인 페이지로
      </button>
      </center>
      
    </div>
  );
};

export default Q14;
