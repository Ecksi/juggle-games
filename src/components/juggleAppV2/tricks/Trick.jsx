import { Box, Grid, Typography } from "@mui/material";
import "./Trick.css";

export default function Trick({ trick }) {
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
      >
        <Grid item>
          <Typography variant="h4">{trick.name}</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <img
            alt={`A ${trick.balls} ball juggling trick`}
            className="juggling-animation"
            src={trick.animation}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            The Three Ball Cascade is the most basic juggling pattern, and the
            first trick any would-be juggler should learn. The Cascade is
            generally considered to be the easiest pattern, and forms the
            backbone of many other tricks.
          </Typography>
        </Grid>
        <Grid item container direction="column" justifyContent="left">
          <Typography variant="body1">Prerequisites:</Typography>
          <Typography variant="body1">Cascade - Over Throw</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Videos:</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          recusandae facere sequi eius iste, ipsa doloribus dolorem doloremque
          hic, at nulla obcaecati a nostrum et eveniet dolores mollitia cumque
          aliquid!
        </Grid>
      </Grid>
    </Box>
  );
}
