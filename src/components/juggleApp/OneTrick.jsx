import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, List, Typography } from "@material-ui/core";
import Trick from "./Trick";
import "./TrickApp.css";

export default function OneTrick() {
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
    <Typography variant="h3" style={{marginTop: '50px'}}>Option 1</Typography>
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateAreas: 
        `"header header"
        "prereqs animation"`,
      justifyItems: 'center'
    }}>
      <Box sx={{ gridArea: 'header' }}>
        <Typography variant="h3">{trick?.name}</Typography>
      </Box>
      <Box sx={{ gridArea: 'prereqs' }}>
        {trick.animation && (
          <img alt="Juggling animation" src={trick.animation} />
        )}
      </Box>
      <Box sx={{ gridArea: 'animation' }}>
        <Typography variant="body1">
          Prerequisites
        </Typography>
        <List>
          {trick.prereq.map((value, i) => (
            <Trick
              key={i}
              trick={threeBallTricks[value]}
              numBalls={convertNumBalls(trick.balls)}
            />
          ))}
        </List>
      </Box>
    </Box>
    <Typography variant="h3" style={{marginTop: '50px'}}>Option 2</Typography>
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateAreas: 
        `"header header"
        "animation prereqs"`,
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <Box sx={{ gridArea: 'header' }}>
        <Typography variant="h3">{trick?.name}</Typography>
      </Box>
      <Box sx={{ gridArea: 'prereqs' }}>
        {trick.animation && (
          <img alt="Juggling animation" src={trick.animation} />
        )}
      </Box>
      <Box sx={{ gridArea: 'animation' }}>
        <Typography variant="body1">
          Prerequisites
        </Typography>
        <List>
          {trick.prereq.map((value, i) => (
            <Trick
              key={i}
              trick={threeBallTricks[value]}
              numBalls={convertNumBalls(trick.balls)}
            />
          ))}
        </List>
      </Box>
    </Box>
    </div>
  );
}
