import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTrick from "../juggleApp/addTrick/AddTrick";
import AllTricks from "../juggleApp/tricks/AllTricks";
import LearnToJuggle from "../juggleApp/learnToJuggle/LearnToJuggle";
import Main from "../juggleApp/main/Main";
import Trick from "../juggleApp/tricks/Trick";
import Welcome from "../juggleApp/main/Welcome";

export default function JuggleRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}>
          <Route index element={<Welcome />} />
          <Route exact path="/allTricks" element={<AllTricks />} />
          <Route exact path="/addTrick" element={<AddTrick />} />
          <Route exact path="/learntojuggle" element={<LearnToJuggle />} />
          <Route
            path="/jugglingTricks/:numBalls/:trickName"
            element={<Trick />}
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
  );
}
