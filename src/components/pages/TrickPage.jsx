import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Trick from "../juggling/Trick";
import { List } from "@material-ui/core";

export default function TrickPage() {
  const { numBalls, trickName } = useParams();
  const allJugglingTricks = useSelector((state) => state.jugglingTrick);
  const trick = allJugglingTricks[numBalls].find(
    (trick) => trick.name === trickName
  );

  return (
    <div>
      <h1>{trick.name}</h1>
      <h2>Animation</h2>
      <img alt="Juggling animation" src={trick.animation}></img>
      <h2>Prerequisites</h2>
      <List>
        {trick.prereq.map((trickTuple) => (
          <Trick
            trick={allJugglingTricks[trickTuple[0]][trickTuple[1]]}
            numBalls={trickTuple[0]}
          />
        ))}
      </List>
    </div>
  );
}
