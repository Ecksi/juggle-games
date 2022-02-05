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
      <Typography variant="h4">Add Prerequisites</Typography>
      <Box
        sx={{
          width: "85%",
          height: "180px",
          padding: "10px 8px",
          border: "1px solid lightgray",
          borderRadius: "4px",
        }}
      >
        {trickInfo.prereqs.map((prereq) => (
          <Chip key={prereq} label={prereq} sx={{ marginRight: "6px" }} />
        ))}
      </Box>
      <Box component="section">
        <FormControl
          className="samopasdmp"
          component="fieldset"
          variant="standard"
        >
          <InputLabel
            id="select-balls-label"
            sx={{ top: "-6px", left: "12px" }}
          >
            Balls
          </InputLabel>
          <Select
            id="select-balls"
            input={<OutlinedInput label="Number of Balls" />}
            labelId="select-balls-label"
            onChange={handlePrereqBalls}
            sx={{ borderRadius: "0" }}
            value={balls}
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          component="fieldset"
          sx={{ width: "300px" }}
          variant="standard"
        >
          <InputLabel
            id="select-trick-label"
            sx={{ top: "-6px", left: "12px" }}
          >
            Select a trick
          </InputLabel>
          <Select
            id="select-trick"
            input={<OutlinedInput id="select-multiple-trick" label="Chip" />}
            labelId="select-trick-label"
            multiple
            onChange={handleChange}
            renderValue={(selected) => (
              <Box>{selected[selected.length - 1]}</Box>
            )}
            sx={{ borderRadius: "0" }}
            value={trickInfo.prereqs}
          >
            {getTricks[balls].map((name) => (
              <MenuItem key={name.name} value={name.name}>
                {name.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
}
