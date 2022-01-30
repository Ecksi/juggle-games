import { Fragment, useState } from "react";
import {
  Box,
  Button,
  MobileStepper,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import LearnToJuggleCard from "./LearnToJuggleCard";

// what is the benefit to having this outside of the function?
// security, speed, seperation
const steps = [
  "Getting started",
  "Baby steps",
  "Moving on up",
  "Now with 3 balls",
  "Three-ball cascade",
  "Next steps",
];

export default function LearnToJuggle() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    activeStep + 1 === steps.length
      ? setActiveStep(0)
      : setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    activeStep - 1 < 0
      ? setActiveStep(steps.length - 1)
      : setActiveStep(activeStep - 1);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ margin: { xs: "18px 0", md: "18px auto 32px" } }}
      >
        Learn to Juggle
      </Typography>
      {/* Desktop - helper text above card */}
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{
          display: { xs: "none", md: "flex" },
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        connector={<Fragment />}
      >
        {steps.map((step, i) => (
          <Step key={i} sx={{ margin: "6px", width: "200px", height: "40px" }}>
            <StepButton
              color="inherit"
              onClick={() => setActiveStep(i)}
              sx={{
                justifyContent: "flex-start",
              }}
            >
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
      <MobileStepper
        activeStep={activeStep}
        steps={steps.length}
        sx={{
          backgroundColor: "transparent",
          justifyContent: "space-between",
          position: "static",
          marginTop: { xs: "18px", md: "24px" },
          display: { xs: "flex", md: "none " },
        }}
        backButton={
          <Button onClick={handlePrev}>
            <KeyboardArrowLeft /> Prev
          </Button>
        }
        nextButton={
          <Button onClick={handleNext}>
            Next <KeyboardArrowRight />
          </Button>
        }
      />
    </Box>
  );
}
