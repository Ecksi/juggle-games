import { Fragment } from "react";
import { Box, Button } from "@mui/material";

export default function PreviewCard({ trickInfo, handlePrev, handleNext }) {
  return (
    <Fragment>
      Your trick name is : {trickInfo.name}
      <p>it uses {trickInfo.balls} balls</p>
      <p>with the following prereqs {trickInfo.prereqs}</p>
      <p>
        Your animation preview <img alt="link" src={trickInfo.animation} />
      </p>
      <Box display="flex" justifyContent="space-evenly" width="100%">
        <Button onClick={handlePrev} variant="outlined">
          Prev
        </Button>
        <Button onClick={handleNext} variant="outlined">
          Next
        </Button>
      </Box>
    </Fragment>
  );
}
