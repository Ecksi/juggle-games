import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJugglingTricksData } from "./store/reducers/jugglingTricksSlice";
import NavBar from "./components/layout/NavBar";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchJugglingTricksData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
