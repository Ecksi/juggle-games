import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import useMediaQuery from "@mui/material/useMediaQuery";

// If this prop is not used for desktop- can I just set it to null so it shows up as nothing?
// This could be applied to navigation component also
export default function AllTricks({ setIsOpen = null }) {
  const threeBallTricks = useSelector(
    (state) => state.jugglingTricks.threeBall
  );
  const fourBallTricks = useSelector((state) => state.jugglingTricks.fourBall);
  const fiveBallTricks = useSelector((state) => state.jugglingTricks.fiveBall);
  const trickMenu = [
    [3, threeBallTricks],
    [4, fourBallTricks],
    [5, fiveBallTricks],
  ];
  const isMobile = useMediaQuery("(min-width:600px)");

  const getTrickMenu = (trickMenu) =>
    trickMenu.map((trickInfo, i) => (
      <Accordion key={i}>
        <AccordionSummary expandIcon={<ArrowForwardIosSharp />}>
          <Typography variant="h5">{trickInfo[0]}-ball tricks</Typography>
        </AccordionSummary>
        <AccordionDetails>{getTricks(trickInfo[1])}</AccordionDetails>
      </Accordion>
    ));

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
          disablePadding={isMobile}
          disableGutters={!isMobile}
        >
          <Link
            to={`/jugglingTricks/${trick.balls}/${trick.name}`}
            onClick={() => setIsOpen(false)}
            state={{ trick }}
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
      {getTrickMenu(trickMenu)}
    </Box>
  );
}
