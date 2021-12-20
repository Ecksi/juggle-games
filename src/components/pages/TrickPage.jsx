import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";
import Trick from "../juggleApp/Trick";

export default function TrickPage() {
  const { numBalls, trickName } = useParams();

  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

  let trick;

  if (numBalls === "threeBall") {
    trick = threeBallTricks.find((trick) => trick.name === trickName);
  } else if (numBalls === "fourBall") {
    trick = fourBallTricks.find((trick) => trick.name === trickName);
  }

  function convertNumBalls( value) {
    if (value === 3) {
      return "threeBall"
    }
    else if (value === 4) {
      return "fourBall"
    }
    else if (value === 5) {
      return "fiveBall"
    }
  }

  return (
    <div>
      <h1>{trick?.name}</h1>

      {trick.animation && (
        <div>
          <h2>Animation</h2>{" "}
          <img alt="Juggling animation" src={trick.animation}></img>
        </div>
      )}
      <h2>Prerequisites</h2>
      <List>
        {trick.prereq.map(value => {
            return (
              <Trick
                trick={threeBallTricks[value]}
                numBalls={convertNumBalls(trick.balls)}
              />
            );
        })}
      </List>
    </div>
  );
}
