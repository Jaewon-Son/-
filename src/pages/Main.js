import { Link } from "react-router-dom";
import React from "react";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.jpg';
import './Main.css'; // CSS 파일을 불러옵니다.

function Main() {
  return (
    <div className="main-container">
      <h1>메인입니다.</h1>
      <div className="thumbnail-container">
        <Link to="/page1" className="thumbnail-block">
          <img src={img1} alt="Page 1" className="thumbnail-image" />
          <h2 className="thumbnail-title">Page 1</h2>
        </Link>
        <Link to="/page2" className="thumbnail-block">
          <img src={img2} alt="Page 2" className="thumbnail-image" />
          <h2 className="thumbnail-title">Page 2</h2>
        </Link>
        <Link to="/page3" className="thumbnail-block">
          <img src={img3} alt="Page 3" className="thumbnail-image" />
          <h2 className="thumbnail-title">Page 3</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
