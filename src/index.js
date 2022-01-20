import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import Main from "./components/juggleAppV2/main/Main";
import AddTrick from "./components/juggleApp/AddTrick";
import AllTricks from "./components/juggleAppV2/tricks/AllTricks";
import LearnToJuggle from "./components/juggleApp/LearnToJuggle";
import OneTrick from "./components/juggleApp/OneTrick";
import Trick from "./components/juggleAppV2/tricks/Trick";
import TaskApp from "./components/taskApp/TaskApp";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          {/* <Route index element={<Main />} /> */}
          <Route exact path="/allTricks" element={<AllTricks />} />
          <Route exact path="/trick" element={<Trick />} />
          <Route exact path="/addTrick" element={<AddTrick />} />
          <Route exact path="/allTricks" element={<AllTricks />} />
          <Route exact path="/learnToJuggle" element={<LearnToJuggle />} />
          <Route exact path="/tasks" element={<TaskApp />} />
          <Route
            path="/jugglingTricks/:numBalls/:trickName"
            element={<OneTrick />}
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
