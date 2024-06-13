import React, {useState} from 'react';
import 키위 from "./images/키위.jpg";
import 양배추 from "./images/양배추.jpg";
import 자두 from "./images/자두.jpg";
import 현미 from "./images/현미.jpg";
import 팥 from "./images/팥.jpg";
import 오이 from "./images/오이.jpg";
import {Link} from 'react-router-dom';
import "./css/Q11.css";

const Q11 = () => {
    const [userDate, setUserDate] = useState(new Date().toISOString().split('T')[0]);
    const [resultMessage, setResultMessage] = useState('');
    const [grainInput, setGrainInput] = useState('');
    const [fruitInput, setFruitInput] = useState('');
    const [vegetableInput, setVegetableInput] = useState('');
    const [isAllIncluded, setIsAllIncluded] = useState(false);

    const data = [
        {image: 팥, name: '팥'},
        {image: 양배추, name: '양배추'},
        {image: 키위, name: '키위'},
        {image: 현미, name: '현미'},
        {image: 오이, name: '오이'},
        {image: 자두, name: '자두'},
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const requiredFruits = ["키위", "자두"];
        const requiredVegetables = ["오이", "양배추"];
        const requiredGrains = ["팥", "현미"];
        const now = new Date().toISOString().split('T')[0];
        const timeCheck = userDate === now;
        const fruitsCheck = requiredFruits.every(fruit => fruitInput.includes(fruit));
        const vegetablesCheck = requiredVegetables.every(vegetable => vegetableInput.includes(vegetable));
        const grainsCheck = requiredGrains.every(grain => grainInput.includes(grain));

        if (fruitsCheck && vegetablesCheck && grainsCheck && timeCheck) {
            setResultMessage("정답입니다 다음문제로 이동하세요");
            setIsAllIncluded(true);
        } else {
            setResultMessage("틀렸습니다 문제를 다시 풀어보세요");
            setIsAllIncluded(false);
        }
    };

    const handleDateChange = (e) => {
        setUserDate(e.target.value);
    };

    return (
        <div className="date-container">
            <center>
                <h1 className="h1">오늘의 날짜를 적으시오.</h1>
                <input
                    type="date"
                    value={userDate}
                    onChange={handleDateChange}
                />
            <div>
                <h1>
                    다음은 변비에 좋은 식품 6가지 입니다.
                </h1>
                <h2>
                   소리 내어 읽어보세요.
                </h2>
                <div>
                    <table>
                        <tbody>
                        {data.reduce((acc, item, index, array) => {
                            if (index % 2 === 0) {
                                const nextItem = array[index + 1];
                                const rowItems = nextItem ? [item, nextItem] : [item];
                                acc.push(rowItems);
                            }
                            return acc;
                        }, []).map((rowItems, rowIndex) => (
                            <tr className="image-row" key={rowIndex}>
                                {rowItems.map((item, itemIndex) => (
                                    <td className="image-item" key={itemIndex}>
                                        <img src={item.image} alt={item.name} className="image"/>
                                        <p className="image-name">{item.name}</p>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
                <form onSubmit={handleSubmit}>
                    <table className="border">
                        <tbody>
                        <tr>
                            <td colSpan={3}>곡물</td>
                            <td colSpan={3}>과일</td>
                            <td colSpan={3}>채소</td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <input
                                    className="no-border"
                                    type="text"
                                    placeholder="곡물 입력"
                                    value={grainInput}
                                    onChange={(e) => setGrainInput(e.target.value)}
                                />
                            </td>
                            <td colSpan="3">
                                <input
                                    className="no-border"
                                    type="text"
                                    placeholder="과일 입력"
                                    value={fruitInput}
                                    onChange={(e) => setFruitInput(e.target.value)}
                                />
                            </td>
                            <td colSpan="3">
                                <input
                                    className="no-border"
                                    type="text"
                                    placeholder="채소 입력"
                                    value={vegetableInput}
                                    onChange={(e) => setVegetableInput(e.target.value)}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <h2>변비에 좋은 식품을 기억해주세요</h2>
                    <button type="submit">제출</button>
                </form>
                <p>{resultMessage}</p>
                {isAllIncluded && <Link to="/ParkQuiz/Q12">다음 문제로</Link>}

            </center>
        </div>
    );
};

export default Q11;
