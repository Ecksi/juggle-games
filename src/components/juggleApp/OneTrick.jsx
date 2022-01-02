import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, List, Typography } from "@mui/material";
import Trick from "./TrickListItem";
import "./TrickApp.css";

export default function OneTrick() {
  const { numBalls, trickName } = useParams();
  const threeBallTricks = useSelector((state) =>state.jugglingTricks.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTricks.fourBall);
  const fiveBallTricks = useSelector((state) => state.jugglingTricks.fiveBall);
  
  let trick;

  switch(numBalls) {
    case "threeBall":
      trick = !!threeBallTricks && threeBallTricks.find((trick) => trick.name === trickName);
      break;
    case "fourBall":
      trick = !!fourBallTricks && fourBallTricks.find((trick) => trick.name === trickName);
      break;
    case "fiveBall":
      trick = !!fiveBallTricks && fourBallTricks.find((trick) => trick.name === trickName);
      break;
    default:
  }

  function convertNumBalls(value) {
    switch(value) {
      case 3:
        return "threeBall";
      case 4:
        return "fourBall";
      case 5:
        return "fiveBall";
      default:
    }
  }

  return (
    <div className="one-trick">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box>
          {!!trick && (
            <img alt="Juggling animation" src={trick.animation} />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography variant="h3">{!!trick && trick?.name}</Typography>
          <Typography
            variant="body2"
            paragraph
            style={{ height: 100 + "%", marginTop: 24 + "px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            fugit optio natus esse nemo ullam ex, corporis dicta impedit commodi
            velit odit eum, ratione sed eligendi aspernatur amet temporibus
            quibusdam.
          </Typography>
          <Container>
            <Typography variant="body1">Prerequisites</Typography>
            <List style={{ diplay: "flex" }}>
              {!!trick && trick.prereq.map((value, i) => (
                <Trick
                  key={i}
                  trick={threeBallTricks[value]}
                  numBalls={convertNumBalls(trick.balls)}
                />
              ))}
            </List>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
