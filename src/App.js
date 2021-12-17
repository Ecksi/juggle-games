import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import AddTrick from "./components/pages/AddTrick";
import Chart from "./components/pages/Chart";
import LearnToJuggle from "./components/pages/LearnToJuggle";
import TaskApp from "./components/taskApp/TaskApp";
import TrickPage from "./components/pages/TrickPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addTrick" element={<AddTrick />} />
          <Route exact path="/chart" element={<Chart />} />
          <Route exact path="/learnToJuggle" element={<LearnToJuggle />} />
          <Route exact path="/tasks" element={<TaskApp />} />
          <Route
            path="/jugglingTricks/:numBalls/:trickName"
            element={<TrickPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
