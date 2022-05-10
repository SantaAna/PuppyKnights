import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeContent from "./components/HomeContent";
import RecruitKnight from "./components/RecruitKnight";
import { KnightProvider } from "./KnightContext";

function App() {
  return (
    <KnightProvider>
      <div className="w-screen h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<HomeContent />} />
              <Route path="/recruit" element={<RecruitKnight />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </KnightProvider>
  );
}

export default App;
