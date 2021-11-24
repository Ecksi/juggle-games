import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import Chart from "./components/pages/Chart";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";
import TrickPage from "./components/pages/TrickPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/chart" element={<Chart />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/tasks" element={<Tasks />}></Route>
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
