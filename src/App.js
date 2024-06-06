import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default App;
