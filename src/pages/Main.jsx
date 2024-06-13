import { Link } from "react-router-dom";
import React from "react";

import img1 from './thumbnails/img1.jpg';
import img2 from './thumbnails/img2.jpg';
import img3 from './thumbnails/img3.jpg';
import './Main.css'; // CSS 파일을 불러옵니다.

function Main() {
  return (
    <div className="main-container">
      <h1>메인화면입니다.</h1>
      <div className="thumbnail-container">
        <Link to="/LeeQuiz/TimerPage" className="thumbnail-block">
          <img src={img1} alt="Lee" className="thumbnail-image" />
          <h2 className="thumbnail-title">이용빈의 퀴즈</h2>
        </Link>
        <Link to="/KimQuiz/Rotation" className="thumbnail-block">
          <img src={img2} alt="Kim" className="thumbnail-image" />
          <h2 className="thumbnail-title">김지민의 퀴즈</h2>
        </Link>
        <Link to="/ParkQuiz/Q11" className="thumbnail-block">
          <img src={img3} alt="Page 3" className="thumbnail-image" />
          <h2 className="thumbnail-title">박재현의 퀴즈</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
