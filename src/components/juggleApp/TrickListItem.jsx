import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Button } from "@material-ui/core";

export default function TrickListItem({ trick, numBalls }) {
  return (
    <ListItem key={numBalls + trick.id} style={{ display: "flex" }}>
      <Link to={`/jugglingTricks/${numBalls}/${trick.name}`}>
        <Button variant="contained">{trick.name}</Button>
      </Link>
    </ListItem>
  );
}
