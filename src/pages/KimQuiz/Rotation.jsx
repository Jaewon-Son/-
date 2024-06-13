import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgs1 from "./KimImage/s.png";
import img2 from "./KimImage/1.png";
import imgs2 from "./KimImage/s2.png";
import imgs3 from "./KimImage/s3.png";
import imgs4 from "./KimImage/s4.png";

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: 60,
    height: 60,
    cursor: "pointer",
  },
  container: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  box: {
    width: 65,
    height: 65,
    border: "1px solid grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
  nameText: {
    color: "black",
    fontSize: 15,
  },
  topicText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    fontSize: 13,
    cursor: 'pointer',
    width: 70,
    height: 30,
},
};
const Box = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/");
  };
  const [rotationAngles, setRotationAngles] = useState([0, 0, 0, 0]);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleImageClick = (index) => {
    const newRotationAngles = [...rotationAngles];
    newRotationAngles[index] += 45; 
    setRotationAngles(newRotationAngles);
  };

  const checkAnswer = () => {
    const correctRotationAngles = [0, 90, 180, 270];
    const correct =
      rotationAngles[1] % 360 === correctRotationAngles[1] &&
      rotationAngles[2] % 360 === correctRotationAngles[2] &&
      rotationAngles[3] % 360 === correctRotationAngles[3];
    setIsCorrect(correct);
  };
  return (
    <div style={styles.appContainer}>
      <span style={styles.topicText}>그림 회전하기</span>
      <span style={styles.nameText}>사진을 클릭하여 90도씩 회전한 그림을 만드세요.</span>

      <div style={styles.container}>
         <div style={styles.box}><img src={imgs1} alt="img1" style={styles.image} /></div>
         <div style={styles.box}><img src={imgs2} alt="img2" style={styles.image} /></div>
         <div style={styles.box}><img src={imgs3} alt="img3" style={styles.image} /></div>
         <div style={styles.box}><img src={imgs4} alt="img4" style={styles.image} /></div>
       </div>

      <div style={styles.container}>
        <div style={styles.box}>
          <img src={img2} style={styles.image} />
        </div>
        <div style={styles.box}>
          <img src={img2} style={{  ...styles.image,
              transform: `rotate(${rotationAngles[1]}deg)`, }}
            onClick={() => handleImageClick(1)}
          />
        </div>
        <div style={styles.box}>
          <img src={img2}  style={{  ...styles.image,
              transform: `rotate(${rotationAngles[2]}deg)`, }}  
            onClick={() => handleImageClick(2)}
          />
        </div>
        <div style={styles.box}>
          <img src={img2}style={{  ...styles.image,
              transform: `rotate(${rotationAngles[3]}deg)`,}}
            onClick={() => handleImageClick(3)}
          />
        </div>
      </div>

      <button style={styles.button} onClick={checkAnswer}>
        정답
      </button>

      {isCorrect && (
        <p style={styles.nameText}>정답입니다!</p>
      )}
      <br/>
      <button onClick={handleToMain} className="next-quiz-button">
        메인 페이지로
      </button>
    </div>
    
  );
};

export default Box;