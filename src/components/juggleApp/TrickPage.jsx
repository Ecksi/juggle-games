import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Grid, Item, List, Paper, Typography } from "@material-ui/core";
import Trick from "./Trick";
import "./JuggleApp.css"

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
    <Box display="grid" gridTemplateColumns="repeat 12, 1fr" gridTemplateRows="50% 50%" gap={2}>
      <Box gridColumn="span 6">
        <Typography variant="h3">{trick?.name}</Typography>
      </Box>
      <Box gridColumn="span 6">
        <Item>
          {trick.animation && (
            <>
              <h2>Animation</h2>
              <img alt="Juggling animation" src={trick.animation}></img>
            </>
          )}
        </Item>
      </Box>
      <Box gridColumn="span 6">
        
      </Box>
    </Box>
  );
}

{/* <Grid>
          <Grid item>
            <Typography variant="h3">
              {trick?.name}
            </Typography>
          </Grid>
          <Grid item>
            {trick.animation && (
              <>
                <h2>Animation</h2>
                <img alt="Juggling animation" src={trick.animation}></img>
              </>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Prerequisites
            </Typography>
            <List>
              {trick.prereq.map(value => (
                <Trick
                  trick={threeBallTricks[value]}
                  numBalls={convertNumBalls(trick.balls)}
                />
              ))}
            </List>
          </Grid>
        </Grid> */}