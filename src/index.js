import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AddTrick from "./components/pages/AddTrick";
import Chart from "./components/pages/Chart";
import LearnToJuggle from "./components/pages/LearnToJuggle";
import TaskApp from "./components/taskApp/TaskApp";
import TrickPage from "./components/pages/TrickPage";
import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route exact path="/addTrick" element={<AddTrick />} />
            <Route exact path="/chart" element={<Chart />} />
            <Route exact path="/learnToJuggle" element={<LearnToJuggle />} />
            <Route exact path="/tasks" element={<TaskApp />} />
            <Route
              path="/jugglingTricks/:numBalls/:trickName"
              element={<TrickPage />}
            />            
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              </main>
            }
          />
          </Route>
        </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
