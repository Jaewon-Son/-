import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import img1 from "./KimImage/1.png";
import img2 from "./KimImage/2.png";
import img3 from "./KimImage/3.png";
import img4 from "./KimImage/4.png";
import img5 from "./KimImage/5.png";
import img6 from "./KimImage/6.png";
import img7 from "./KimImage/7.png";
import img8 from "./KimImage/8.png";
import img9 from "./KimImage/9.png";

const correctAnswers = [
  "나비",
  "비상구",
  "구두",
  "두부",
  "부채",
  "채소",
  "소화기",
  "기린",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = () => {
  
  const [userInputs, setUserInputs] = useState(Array(8).fill(""));
  const [message, setMessage] = useState("");
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray([
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
    ]);
    setShuffledImages(shuffled);
  }, []);

  const handleChange = (index, e) => {
    const newInputs = [...userInputs];
    newInputs[index] = e.target.value;
    setUserInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(userInputs) === JSON.stringify(correctAnswers)) {
      setMessage("정답입니다!");
    } else {
      setMessage("틀렸습니다. 다시 시도하세요.");
      setUserInputs(Array(8).fill(""));
    }
  };
  const navigate = useNavigate();
  const handleNextQuiz = () => {
    navigate('/KimQuiz/Rotation');
  };
  const styles = {
    appContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      border: "1px solid grey",
      backgroundColor: "#f0f0f3",
    },
    image: {
      width: 60,
      height: 60,
    },
    container: {
      margin: 10,
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    nameText: {
      color: "black",
      fontSize: 10,
      textAlign: "center",
    },
    topicText: {
      color: "black",
      fontSize: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
    input: {
      width: 50,
      height: 20,
      fontSize: 16,
      textAlign: "center",
      margin: 5,
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
    button: {
      display: "block",
      fontSize: 10,
      cursor: "pointer",
      width: 50,
      height: 20,
    },
    message: {
      marginTop: 20,
      fontSize: 15,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.appContainer}>
      <span style={styles.topicText}>사진 끝말잇기</span>
      <span style={styles.nameText}>
        사진들의 이름을 떠올리며 끝말잇기로 연결해보세요.
      </span>
      <img src={img1} style={styles.image} />
      <div style={styles.container}>
        {shuffledImages.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            style={styles.image}
            alt={`img-${index}`}
          />
        ))}
      </div>
      <div style={styles.container}>
        {shuffledImages.slice(4, 8).map((img, index) => (
          <img
            key={index}
            src={img}
            style={styles.image}
            alt={`img-${index}`}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.container}>
          {userInputs.slice(0, 4).map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              onChange={(e) => handleChange(index, e)}
              placeholder={`단어 ${index + 1}`}
              style={styles.input}
            />
          ))}
        </div>
        <div style={styles.container}>
          {userInputs.slice(4, 8).map((input, index) => (
            <input
              key={index + 4}
              type="text"
              value={input}
              onChange={(e) => handleChange(index + 4, e)}
              placeholder={`단어 ${index + 5}`}
              style={styles.input}
            />
          ))}
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            제출
          </button>
          <br/>
          <button onClick={handleNextQuiz} className="next-quiz-button">다음 문제 풀기</button>
        </div>
      </form>
      <p style={styles.message}>{message}</p>
      
    </div>
  );
};

export default Quiz;
