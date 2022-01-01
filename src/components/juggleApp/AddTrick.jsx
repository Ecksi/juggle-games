import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrick,
  fetchJugglingTricksData,
} from "../../store/reducers/jugglingTricksSlice";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
// import { API_URL } from "../../app/constants";
// import axios from "axios";
// TODO: All tricks needs to be called on all pages so data is available
export default function AddTrick() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJugglingTricksData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const threeBallTricks = useSelector((state) => {
    console.log("closer", state);
    return state.jugglingTricks.threeBall;
  });

  // const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);
  // const fiveBallTricks = useSelector((state) => state.jugglingTrick.fiveBall);

  const determinePreReq = (e) => {
    let prereqs = [];

    for (let i = 6; i < e.target.length - 1; i++) {
      e.target[i].checked && prereqs.push(e.target[i].name);
    }

    return prereqs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let trick = {};
    trick = {
      id: `${e.target[2].value}BallTricks`.length,
      name: e.target[0].value,
      balls: e.target[2].value,
      animation: e.target[4].value,
      prereqs: determinePreReq(e),
    };

    dispatch(addTrick(trick));

    //   if (numBalls === "threeBall") {
    //     trick = {
    //       id: threeBallTricks.length,
    //       balls: 3,
    //       name: newTrick,
    //       animation: animationLink,
    //       prereq: prereqs,
    //     };

    //     dispatch(addThreeBallTrick(trick));
    //   } else if (numBalls === "fourBall") {
    //     trick = {
    //       id: fourBallTricks.length,
    //       balls: -1,
    //       name: newTrick,
    //       animation: animationLink,
    //       prereq: prereqs,
    //     };

    //     dispatch(addFourBallTrick(trick));
    //   }
    //   axios.post(`${API_URL}/api/v1/tricks/addTrick`, trick);
  };

  // const handlePreReqOnChange = (index) => {
  //   const preTrick = threeBallTricks[index];

  //   const updatedCheckedState = prereqCheckedState.map((item, ip) =>
  //     ip === index ? !item : item
  //   );
  //   setPrereqCheckedState(updatedCheckedState);

  //   let newPrereqs = [];

  //   // how can this be written to fix filter needs return value error
  //   if (updatedCheckedState[index]) {
  //     newPrereqs = prereqs?.slice();
  //     newPrereqs.push(preTrick.id);
  //   } else {
  //     newPrereqs = prereqs?.filter((value) => {
  //       if (value !== preTrick.id) {
  //         return value;
  //       }
  //       // only here to remove error. refactor~
  //       return null;
  //     });
  //   }

  //   setPrereqs(newPrereqs);
  // };

  // Currently not being used
  // const convertBallNumToText = (value) => {
  //   if (value === 3) {
  //     return "threeBall";
  //   }
  //   if (value === 4) {
  //     return "fourBall";
  //   }
  // };

  return (
    <Box sx={{ margin: "0 auto", width: "30%" }}>
      <Typography variant="h4">Add a new trick</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            required
            label="Trick Name"
            margin="normal"
            // value={newTrick}
            // onChange={(e) => setNewTrick(e.target.value)}
          ></TextField>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Number of Balls *
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Number Of Balls"
            onChange={(e) => e.target.value}
            value=""
          >
            <MenuItem value="3">3 ball</MenuItem>
            <MenuItem value="4">4 ball</MenuItem>
            <MenuItem value="5">5 ball</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            label="Animation Link"
            margin="normal"
            // value={animationLink}
            // onChange={(e) => setAnimationLink(e.target.value)}
          ></TextField>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Typography>Select Prerequisites</Typography>
          <List>
            {!!threeBallTricks &&
              threeBallTricks.map((trick, i) => (
                <ListItem key={i} disableGutters>
                  <input
                    type="checkbox"
                    value={trick}
                    name={trick.name}
                    // checked={prereqCheckedState[i]}
                    // onChange={() => handlePreReqOnChange(i)}
                  />
                  <Typography variant="body2">{trick.name}</Typography>
                </ListItem>
              ))}
          </List>
        </FormControl>
        <FormControl fullWidth>
          <Button type="submit" variant="contained">
            Add trick
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
