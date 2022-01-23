import { Fragment, useState } from "react";
import { Box, Step, StepButton, Stepper, Typography } from "@mui/material";

// what is the benefit to having this outside of the function?
const steps = [
  "Getting Started",
  "Moving on up",
  "3 Balls!",
  "Now You've Got it",
  "Improving your skills",
];

export default function LearnToJuggle() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
      </Fragment>
    </Box>
  );
}
