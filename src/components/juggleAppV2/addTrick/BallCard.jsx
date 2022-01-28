import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import twoBallsC from "../../../assets/img/icons/2b-c.png";
import twoBallsO from "../../../assets/img/icons/2b-o.png";
import threeBallsC from "../../../assets/img/icons/3b-c.png";
import threeBallsO from "../../../assets/img/icons/3b-o.png";
import fourBallsC from "../../../assets/img/icons/4b-c.png";
import fourBallsO from "../../../assets/img/icons/4b-o.png";
import fiveBallsC from "../../../assets/img/icons/5b-c.png";
import fiveBallsO from "../../../assets/img/icons/5b-o.png";
import sevenBallsC from "../../../assets/img/icons/7b-c.png";
import sevenBallsO from "../../../assets/img/icons/7b-o.png";

export default function BallCard({
  trickInfo,
  setTrickInfo,
  handlePrev,
  handleNext,
}) {
  const handleBalls = (e) =>
    setTrickInfo({ ...trickInfo, balls: e.target.value });
  const getImg = (numBalls) => {
    const selectImgType = {
      2: [twoBallsO, twoBallsC],
      3: [threeBallsO, threeBallsC],
      4: [fourBallsO, fourBallsC],
      5: [fiveBallsO, fiveBallsC],
      7: [sevenBallsO, sevenBallsC],
    };

    return trickInfo.balls === numBalls ? (
      <img
        alt={`${numBalls} balls`}
        src={selectImgType[numBalls][1]}
        width="64px"
      />
    ) : (
      <img
        alt={`${numBalls} balls`}
        src={selectImgType[numBalls][0]}
        width="60px"
      />
    );
  };

  const thing = ["2", "3", "4", "5", "7"];

  const generateOptions = thing.map((num) => (
    <FormControlLabel
      key={num}
      value={num}
      control={<Radio sx={{ display: "none" }} />}
      label={getImg(num)}
    />
  ));

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography variant="h4">Select Number of Balls</Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue={trickInfo.balls}
        value={trickInfo.balls}
        onChange={handleBalls}
        name="row-radio-buttons-group"
        sx={{ width: "100%", justifyContent: "space-evenly" }}
      >
        {generateOptions}
      </RadioGroup>
      <Box display="flex" justifyContent="space-evenly" width="100%">
        <Button onClick={handlePrev} variant="outlined">
          Prev
        </Button>
        <Button onClick={handleNext} variant="outlined">
          Next
        </Button>
      </Box>
    </FormControl>
  );
}
