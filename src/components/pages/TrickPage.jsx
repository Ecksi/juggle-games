import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TrickPage() {
  const { numBalls, trickName } = useParams();
  const tricks = useSelector((state) => state.juggling);
  const trick = tricks[numBalls].find((trick) => trick.name === trickName);

  return (
    <React.Fragment>
      <h3>{trick.name}</h3>
      <div>
        <h4>Prerequisites:</h4>
        {trick.prereq.map((req) => (
          <p>{tricks[req[0]][req[1]]["name"]}</p>
        ))}
      </div>
    </React.Fragment>
  );
}
