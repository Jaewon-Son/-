import React from "react";
import "./Line.css";

const Line = ({ start, end }) => {
  //30을 곱해서 셀 크기에 맞추기(안 곱했더니 너무 작음..)
  const x1 = start.x * 30;
  const y1 = start.y * 30;

  const x2 = end.x * 30;
  const y2 = end.y * 30;

  //두 점 사이의 거리 계산
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  //점을 이은 선분이 가지고 있는 각도를 탄젠트를 이용해서 계산
  //그 후 180/pi를 곱해줘서 라디안 각도를 일반 각도로 변환
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  //선의 길이, 회전 각도, 시작 위치를 설정
  const style = {
    width: `${length}px`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: "0 0",
    top: `${y1}px`, //시작 위치 설정
    left: `${x1}px`,
  };
  //생성된 선 리턴
  return <div className="line" style={style} />;
};

export default Line;
