import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import './QuizPage.css';


import andreKim from './images/앙드레김.jpg';
import choiKyuHa from './images/최규하.jpg';
import pattyKim from './images/패티김.jpg';
import songHae from './images/송해.jpg';
import kimHyeJa from './images/김혜자.jpg';


const answers = [
  { imgSrc: choiKyuHa, job: '대통령', name: '최규하', feature: '대한민국 제10대 대통령', hint: '역대 최단기간 재임 1979.12 ~ 1980.08' },
  { imgSrc: pattyKim, job: '가수', name: '패티김', feature: '이별, 서울의 찬가 대표곡', hint: '' },
  { imgSrc: songHae, job: '방송인', name: '송해', feature: '최고령 진행자', hint: '1988년부터 전국노래자랑 진행' },
  { imgSrc: andreKim, job: '디자이너', name: '앙드레김', feature: '대한민국 최초의 남성 패션디자이너', hint: '' },
  { imgSrc: kimHyeJa, job: '탤런트', name: '김혜자', feature: '전원일기 출연', hint: '1980년부터 2002년 총 22년 2개월 동안 1088회 방영' }
];

const initialData = answers.map(answer => ({ ...answer, job: '', name: '', feature: '', hint: '' }));

const QuizPage = () => {
  const [data, setData] = useState(initialData);
  const [results, setResults] = useState(Array(answers.length).fill(null));
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleResults = (newResults) => {
    setResults(newResults);
  };

  const handleNextQuiz = () => {
    navigate('/LeeQuiz/WellQuizPage');
  };

  return (
    <div className="quiz-container">
      <header>
        <h1>인물 기억하기</h1>
        <h2>앞서 기억해 둔 인물의 정보를 보기에서 찾아 적어보세요.</h2>
      </header>
      <div className="hints">
        <table className="hints-table">
          <thead>
            <tr>
              <th colSpan="6">보기</th>
            </tr>
            <tr>
              <th>이름</th>
              <th>송해</th>
              <th>패티김</th>
              <th>김혜자</th>
              <th>최규하</th>
              <th>앙드레김</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>직업</td>
              <td>방송인</td>
              <td>가수</td>
              <td>탤런트</td>
              <td>대통령</td>
              <td>디자이너</td>
            </tr>
            <tr>
              <td>특징</td>
              <td>최고령 진행자</td>
              <td>이별, 서울의 찬가 대표곡</td>
              <td>전원일기 출연</td>
              <td>대한민국 제10대 대통령</td>
              <td>대한민국 최초의 남성 패션디자이너</td>
            </tr>
          </tbody>
        </table>
      </div>
      <form className="quiz-form">
        <table className="quiz-table">
          <thead>
            <tr>
              <th>인물</th>
              <th>직업</th>
              <th>이름</th>
              <th>특징</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index} className="quiz-item">
                <td>
                  <img src={person.imgSrc} alt={`Person ${index}`} className="quiz-image" />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="직업"
                    value={person.job}
                    onChange={(e) => handleChange(index, 'job', e.target.value)}
                  />
                  {results[index] && results[index].job && (
                    <div className="correct-answer">정답입니다!</div>
                  )}
                  {results[index] && !results[index].job && (
                    <div className="incorrect-answer">정답: {answers[index].job}</div>
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="이름"
                    value={person.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                  />
                  {results[index] && results[index].name && (
                    <div className="correct-answer">정답입니다!</div>
                  )}
                  {results[index] && !results[index].name && (
                    <div className="incorrect-answer">정답: {answers[index].name}</div>
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="특징"
                    value={person.feature}
                    onChange={(e) => handleChange(index, 'feature', e.target.value)}
                  />
                  {answers[index].hint && (
                    <div className="hint">귀뜸: {answers[index].hint}</div>
                  )}
                  {results[index] && results[index].feature && (
                    <div className="correct-answer">정답입니다!</div>
                  )}
                  {results[index] && !results[index].feature && (
                    <div className="incorrect-answer">정답: {answers[index].feature}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SubmitButton data={data} answers={answers} onSubmit={handleResults} isWellQuiz={false} />
      </form>
      <button onClick={handleNextQuiz} className="next-quiz-button">다음 문제 풀기</button>
    </div>
  );
};

export default QuizPage;




