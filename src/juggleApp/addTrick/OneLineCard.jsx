import { Fragment } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
export default function OneLineCard({
  trickInfo,
  setTrickInfo,
  header,
  inputText,
  lineType,
  handlePrev,
  handleNext,
  error,
}) {
  const handleChange = (e) =>
    setTrickInfo({ ...trickInfo, [lineType]: e.target.value });

  return (
    <Fragment>
      <Typography variant="h4">{header}</Typography>
      <TextField
        required
        error={error}
        id={`add-trick-${lineType}`}
        label={inputText}
        variant="standard"
        value={trickInfo[lineType]}
        onChange={handleChange}
        helperText={error ? `Please enter a ${lineType} for your trick` : ""}
      />
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
