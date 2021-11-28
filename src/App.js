import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import Chart from "./components/pages/Chart";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";
import AddTrick from "./components/pages/AddTrick.jsx"
import TrickPage from "./components/pages/TrickPage";
import LonelyKnight from "./components/pages/LonelyKnight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/chart" element={<Chart />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/tasks" element={<Tasks />}></Route>
          <Route exact path="/addTrick" element={<AddTrick />}></Route>
          <Route exact path="/lonelyKnight" element={<LonelyKnight />}></Route>
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
