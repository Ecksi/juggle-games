import { Fragment } from "react";
import { TextField, Typography } from "@mui/material";
export default function OneLineCard({
  trickInfo,
  setTrickInfo,
  header,
  inputText,
  lineType,
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
        helperText={error ? `Please enter a ${lineType} for your trick` : ""}
        id={`add-trick-${lineType}`}
        label={inputText}
        onChange={handleChange}
        sx={{ width: "80%" }}
        value={trickInfo[lineType]}
        variant="standard"
      />
    </Fragment>
  );
}
