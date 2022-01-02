import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  Typography,
} from "@mui/material";
import Trick from "./TrickListItem";
import "./TrickApp.css";

export default function AllTricks() {
  const threeBallTricks = useSelector((state) => state.jugglingTricks.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTricks.fourBall);
  const fiveBallTricks = useSelector((state) => state.jugglingTricks.fiveBall);

  return (
    <Box className="all-tricks">
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">3-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!threeBallTricks &&
              threeBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"threeBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">4-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!fourBallTricks &&
              fourBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"fourBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">5-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!fiveBallTricks &&
              fiveBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"fiveBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
