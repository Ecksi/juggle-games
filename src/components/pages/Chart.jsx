import React from "react";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";
import Trick from "../juggling/Trick";

export default function Chart() {
  const tricks = useSelector((state) => state.juggling);

  return (
    <div>
      <h3>3-ball tricks</h3>
      <List>
        {tricks["3ball"].map((trick) => (
          <Trick trick={trick} numBalls={"3ball"} />
        ))}
      </List>
      <h3>4-ball tricks</h3>
      <List>
        {tricks["4ball"].map((trick) => (
          <Trick trick={trick} numBalls={"4ball"} />
        ))}
      </List>
      <h3>5-ball tricks</h3>
      <List>
        {tricks["5ball"].map((trick) => (
          <Trick trick={trick} numBalls={"5ball"} />
        ))}
      </List>
    </div>
  );
}
