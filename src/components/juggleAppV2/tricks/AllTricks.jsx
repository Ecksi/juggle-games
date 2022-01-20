import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchJugglingTricksData } from "../../../store/reducers/jugglingTrickSlice";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { ArrowForwardIosSharp } from "@mui/icons-material";

export default function AllTricks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJugglingTricksData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);
  const fiveBallTricks = useSelector((state) => state.jugglingTrick.fiveBall);

  const getTricks = (tricksArr) => (
    <List disablePadding sx={{ flexDirection: "column" }}>
      {tricksArr?.map((trick, i) => (
        <ListItem
          key={i}
          sx={{
            width: "unset",
            display: "block",
            borderBottom: { xs: "1px solid #461E52", md: "none" },
            ":first-of-type": {
              borderTop: { xs: "1px solid #461E52", md: "none" },
            },
          }}
          disableGutters
        >
          <Link
            to={`/jugglingTricks/${trick.balls}/${trick.name}`}
            style={{
              textDecoration: "none",
              color: "#461E52",
              fontWeight: "bold",
            }}
          >
            <ListItemButton>{trick.name}</ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box className="all-tricks" sx={{ overflow: { xs: "scroll", sm: "auto" } }}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharp />}>
          <Typography variant="h5">3-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>{getTricks(threeBallTricks)}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharp />}>
          <Typography variant="h5">4-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>{getTricks(fourBallTricks)}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowForwardIosSharp />}>
          <Typography variant="h5">5-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>{getTricks(fiveBallTricks)}</AccordionDetails>
      </Accordion>
    </Box>
  );
}
