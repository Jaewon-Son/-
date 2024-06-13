import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonList from './PersonList';
import './TimerPage.css';

const TimerPage = () => {
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(countdown);
          navigate('/LeeQuiz/QuizPage'); 
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate]);

  const handleNextPage = () => {
    navigate('/LeeQuiz/QuizPage/');
  };

  return (
    <div className="timer-page">
      <header className="header">
        <h1>인물 기억하기</h1>
        <h2>1분 동안 최대한 기억해보세요!</h2>
        <h3>남은 시간: {seconds}초</h3>
        <button onClick={handleNextPage} className="next-button">퀴즈 페이지로 이동</button>
      </header>
      <PersonList />
    </div>
  );
};

export default TimerPage;
