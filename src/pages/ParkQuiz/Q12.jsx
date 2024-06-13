import React, { useState } from 'react';
import 키위 from "./images/키위.jpg";
import 양배추 from "./images/양배추.jpg";
import 자두 from "./images/자두.jpg";
import 현미 from "./images/현미.jpg";
import 팥 from "./images/팥.jpg";
import 오이 from "./images/오이.jpg";
import { Link } from 'react-router-dom';
import "./css/Q12.css";

const Q12 = () => {
    const correctAnswers = {
        팥: '팥',
        양배추: '양배추',
        키위: '키위',
        현미: '현미',
        오이: '오이',
        자두: '자두'
    };

    const [data, setData] = useState([
        { image: 팥, name: '팥', ans: '' },
        { image: 양배추, name: '양배추', ans: '' },
        { image: 키위, name: '키위', ans: '' },
        { image: 현미, name: '현미', ans: '' },
        { image: 오이, name: '오이', ans: '' },
        { image: 자두, name: '자두', ans: '' },
    ]);
    const [isAllIncluded, setIsAllIncluded] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const allCorrect = data.every(item => item.ans.trim() === correctAnswers[item.name]);
        setIsAllIncluded(allCorrect);
        if (allCorrect) {
            setResultMessage("정답입니다! 다음 문제로 넘어가세요");
        } else {
            setResultMessage("틀렸습니다 다시한번 풀어보세요.");
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
                <h1 style={{ textAlign: "center" }}>앞에서 기억해 둔 변비에 좋은 식품을 보기 에서 찾아 적어보세요.</h1>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th colSpan="3"><center>{"<보기>"}</center></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>양배추</td>
                            <td style={{ textAlign: "center" }}>자두</td>
                            <td style={{ textAlign: "center" }}>오이</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>현미</td>
                            <td style={{ textAlign: "center" }}>키위</td>
                            <td style={{ textAlign: "center" }}>팥</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                            {data.reduce((acc, item, index, array) => {
                                if (index % 2 === 0) {
                                    const nextItem = array[index + 1];
                                    acc.push([item, nextItem]);
                                }
                                return acc;
                            }, []).map((rowItems, rowIndex) => (
                                <tr className="image-row" key={rowIndex}>
                                    {rowItems.map((item, itemIndex) => (
                                        <td className="image-item" key={item.name}>
                                            <img src={item.image} alt={item.name} className="image" />
                                            <input
                                                type="text"
                                                placeholder="채소 입력"
                                                value={item.ans}
                                                onChange={(e) => handleInputChange(rowIndex * 2 + itemIndex, e.target.value)}
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

                <h1><center>변비에 좋은 식품을 기억해 주세요</center></h1>
                <center>
                    <p>{resultMessage}</p>
                    {isAllIncluded && (
                        <Link to="/ParkQuiz/Q14">다음</Link>
                    )}
                </center>
            </center>
        </div>
    );
};

export default Q12;
