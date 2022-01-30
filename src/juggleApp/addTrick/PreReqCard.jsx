import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

export default function PreReqCard({ trickInfo, setTrickInfo }) {
  const [balls, setBalls] = useState("3");
  const threeBallTricks = useSelector(
    (state) => state.jugglingTricks.threeBall
  );
  const fourBallTricks = useSelector((state) => state.jugglingTricks.fourBall);
  const fiveBallTricks = useSelector((state) => state.jugglingTricks.fiveBall);

  const getTricks = {
    2: [],
    3: threeBallTricks,
    4: fourBallTricks,
    5: fiveBallTricks,
    7: [],
  };

  const handlePrereqBalls = (e) => {
    setBalls(e.target.value);
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setTrickInfo({
      ...trickInfo,
      prereqs: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <Fragment>
      <Typography variant="h4">Add Prerequesistitiesis</Typography>
      <FormControl variant="standard">
        <InputLabel id="select-balls-label">Balls</InputLabel>
        <Select
          labelId="select-balls-label"
          id="select-balls"
          value={balls}
          onChange={handlePrereqBalls}
          input={<OutlinedInput label="Number of Balls" />}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 300 }} component="fieldset" variant="standard">
        <InputLabel id="select-trick-label">Select a trick</InputLabel>
        <Select
          labelId="select-trick-label"
          id="select-trick"
          multiple
          value={trickInfo.prereqs}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-trick" label="Chip" />}
          renderValue={(selected) => <Box>{selected[selected.length - 1]}</Box>}
        >
          {getTricks[balls].map((name) => (
            <MenuItem key={name.name} value={name.name}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        Trick prerequisites: <br />
        {trickInfo.prereqs.map((prereq) => (
          <Chip key={prereq} label={prereq} />
        ))}
      </Box>
    </Fragment>
  );
}
