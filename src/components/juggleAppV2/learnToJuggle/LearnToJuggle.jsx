import { useState } from "react";
import { Box, Step, StepButton, Stepper, Typography } from "@mui/material";
import LearnToJuggleCard from "./LearnToJuggleCard";

// what is the benefit to having this outside of the function?
const steps = [
  "Getting Started",
  "Now with two balls",
  "Three Ball Cascade",
  "Now You've Got it",
  "Improving your skills",
];

export default function LearnToJuggle() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    // check for position
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    // check for position
    setActiveStep(activeStep - 1);
  };

  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ margin: "18px 0 32px" }}>
        Learn to Juggle
      </Typography>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, i) => (
          <Step key={i}>
            <StepButton color="inherit" onClick={() => setActiveStep(i)}>
              {step}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <LearnToJuggleCard
        step={activeStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </Box>
  );
}
