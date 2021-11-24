import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Trick from "../juggling/Trick";
import { List } from "@material-ui/core";

export default function TrickPage() {
  const { numBalls, trickName } = useParams();
  
  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

  let trick

  if (numBalls === "threeBall") {
   trick = threeBallTricks.find(
    (trick) => trick.name === trickName
  );
  }
  else if (numBalls === "fourBall") {
    trick = fourBallTricks.find(
      (trick) => trick.name === trickName
    );
  }

  return (
    <div>
      <h1>{trick.name}</h1>
      <h2>Animation</h2>
      <img alt="Juggling animation" src={trick.animation}></img>
      <h2>Prerequisites</h2>
      <List>
        {trick.prereq.map((trickTuple) => {
            if(trickTuple[0] === "threeBall"){
              return (<Trick
              trick={threeBallTricks[trickTuple[1]]}
              numBalls={trickTuple[0]}
            /> )  
            } else if (trickTuple[0] === "fourBall"){
              return (<Trick
              trick={fourBallTricks[trickTuple[1]]}
              numBalls={trickTuple[0]}
            />)
            }
            return null
        })}
      </List>
    </div>
  );
}
