import React from "react";
import PersonCard from "./PersonCard";
import "./PersonList.css";

import andreKim from "./images/앙드레김.jpg";
import choiKyuHa from "./images/최규하.jpg";
import pattyKim from "./images/패티김.jpg";
import songHae from "./images/송해.jpg";
import kimHyeJa from "./images/김혜자.jpg";

const people = [
  {
    image: choiKyuHa,
    job: "대통령",
    name: "최규하",
    feature: "대한민국 제10대 대통령 역대 최단기간 재임 1979.12 ~ 1980.08",
  },
  {
    image: andreKim,
    job: "디자이너",
    name: "앙드레김",
    feature: "대한민국 최초의 남성 패션디자이너",
  },
  {
    image: pattyKim,
    job: "가수",
    name: "패티김",
    feature: "이별, 서울의 찬가 대표곡",
  },
  {
    image: songHae,
    job: "방송인",
    name: "송해",
    feature: "최고령 진행자, 1988년부터 전국노래자랑 진행",
  },
  {
    image: kimHyeJa,
    job: "탤런트",
    name: "김혜자",
    feature: "전원일기 출연, 1980년부터 2002년 총 22년 2개월 동안 1088회 방영",
  },
];

const PersonList = () => {
  return (
    <div className="person-list">
      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
};

export default PersonList;
