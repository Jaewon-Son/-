import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import TimerPage from "./pages/LeeQuiz/TimerPage.js";
import QuizPage from "./pages/LeeQuiz/QuizPage.js";
import WellQuizPage from "./pages/LeeQuiz/WellQuizPage.js";
import Q11 from "./pages/ParkQuiz/Q11.jsx"
import Q12 from "./pages/ParkQuiz/Q12.jsx"
import Q14 from "./pages/ParkQuiz/Q14.jsx"
import Thumbnail from "./pages/SonQuiz/Thumbnail.jsx";
import Table from "./pages/SonQuiz/drawing/Table.jsx";
import SymbolTable from "./pages/SonQuiz/clickSymbol/SymbolTable.jsx";
import Quiz from "./pages/KimQuiz/Quiz.jsx";
import Rotation from "./pages/KimQuiz/Rotation.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/LeeQuiz/TimerPage" element={<TimerPage />} />
      <Route path="/LeeQuiz/QuizPage" element={<QuizPage />} />
      <Route path="/LeeQuiz/WellQuizPage" element={<WellQuizPage />} />
      <Route path="/KimQuiz/Quiz" element={<Quiz />} />
      <Route path="/KimQuiz/Rotation" element={<Rotation />} />
      <Route path="/ParkQuiz/Q11" element={<Q11 />} />
      <Route path="/ParkQuiz/Q12" element={<Q12 />} />
      <Route path="/ParkQuiz/Q14" element={<Q14 />} />
      <Route path="/SonQuiz/Thumbnail" element={<Thumbnail/>}/>
      <Route path="/SonQuiz/drawing/Table" element={<Table/>}/>
      <Route path="/SonQuiz/clickSymbol/SymbolTable" element={<SymbolTable/>}/>
    </Routes>
  );
}

export default App;
