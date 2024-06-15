import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Thumbnail.css";
import draw from "./SonImg/draw.png";
import symbol from "./SonImg/symbol.jpg";
function Thumbnail() {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  return (
    <>
      <div className="main-container">
        <h1>손재원의 퀴즈</h1>

        <div className="thumbnail-container">
          <Link to="/SonQuiz/drawing/Table" className="thumbnail-block">
            <img src={draw} alt="Page 4" className="thumbnail-image" />
            <h2 className="thumbnail-title">그리기 문제</h2>
          </Link>
          <Link
            to="/SonQuiz/clickSymbol/SymbolTable"
            className="thumbnail-block"
          >
            <img src={symbol} alt="Page 4" className="thumbnail-image" />
            <h2 className="thumbnail-title">중복체크 문제</h2>
          </Link>
        </div>
        <button onClick={handleToMain} className="next-quiz-button">
          메인 페이지로
        </button>
      </div>
    </>
  );
}

export default Thumbnail;
