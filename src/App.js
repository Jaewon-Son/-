import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Rotation from "./pages/KimQuiz/Rotation.jsx"
import TimerPage from "./pages/LeeQuiz/TimerPage.js";
import QuizPage from "./pages/LeeQuiz/QuizPage.js";
import WellQuizPage from "./pages/LeeQuiz/WellQuizPage.js";
import Q11 from "./pages/ParkQuiz/Q11.jsx"
import Q12 from "./pages/ParkQuiz/Q12.jsx"
import Q14 from "./pages/ParkQuiz/Q14.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/LeeQuiz/TimerPage" element={<TimerPage />} />
      <Route path="/LeeQuiz/QuizPage" element={<QuizPage />} />
      <Route path="/LeeQuiz/WellQuizPage" element={<WellQuizPage />} />
      <Route path="/KimQuiz/Rotation" element={<Rotation />} />
      <Route path="/ParkQuiz/Q11" element={<Q11 />} />
      <Route path="/ParkQuiz/Q12" element={<Q12 />} />
      <Route path="/ParkQuiz/Q14" element={<Q14 />} />
    </Routes>
  );
}

export default App;
