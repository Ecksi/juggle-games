import { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import OneLineCard from "./OneLineCard";
import BallCard from "./BallCard";
import PreReqCard from "./PreReqCard";
import PreviewCard from "./PreviewCard";

export default function AddTrick() {
  const [activeStep, setActiveStep] = useState(0);
  const [trickInfo, setTrickInfo] = useState({
    name: "",
    balls: "",
    animation: "",
    prereqs: [],
    error: false,
  });

  const handlePrev = () => {
    activeStep - 1 < 0
      ? setActiveStep(steps.length - 1)
      : setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    checkForError();

    activeStep + 1 === steps.length
      ? setActiveStep(0)
      : setActiveStep(activeStep + 1);
  };

  const checkForError = () =>
    trickInfo.name ? (trickInfo.error = false) : (trickInfo.error = true);
  const addNameCard = (
    <OneLineCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      handlePrev={handlePrev}
      handleNext={handleNext}
      error={trickInfo.error}
      header="What is your Trick name?"
      inputText="Trick Name"
      lineType="name"
    />
  );

  const addBallCard = (
    <BallCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );

  const addPrereqCard = (
    <PreReqCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );

  const addAnimationCard = (
    <OneLineCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      handlePrev={handlePrev}
      handleNext={handleNext}
      header="What is your Animation Link?"
      inputText="Animation Link"
      lineType="animation"
    />
  );

  const addPreviewCard = (
    <PreviewCard
      trickInfo={trickInfo}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );

  const steps = [
    addNameCard,
    addBallCard,
    addPrereqCard,
    addAnimationCard,
    addPreviewCard,
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ margin: { xs: "18px 0", md: "18px 0 32px" } }}
      >
        Add a trick
      </Typography>
      <Card
        sx={{
          marginTop: { xs: "0", md: "32px" },
          height: { xs: "80vh", md: "500px" },
        }}
      >
        <CardContent className="content" sx={{ height: "100%" }}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            {steps[activeStep]}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
