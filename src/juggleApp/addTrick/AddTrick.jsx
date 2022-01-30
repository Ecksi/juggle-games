import { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
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
      error={trickInfo.error}
      header="What is your Trick name?"
      inputText="Trick Name"
      lineType="name"
    />
  );

  const addBallCard = (
    <BallCard trickInfo={trickInfo} setTrickInfo={setTrickInfo} />
  );

  const addPrereqCard = (
    <PreReqCard trickInfo={trickInfo} setTrickInfo={setTrickInfo} />
  );

  const addAnimationCard = (
    <OneLineCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      header="What is your Animation Link?"
      inputText="Animation Link"
      lineType="animation"
    />
  );

  const addPreviewCard = <PreviewCard trickInfo={trickInfo} />;

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
        sx={{
          margin: { xs: "18px 0", md: "18px 0 32px" },
          color: "text.primary",
        }}
      >
        Add a trick
      </Typography>
      <Card
        sx={{
          marginTop: { xs: "0", md: "32px" },
          padding: "24px",
          height: { xs: "80vh", md: "500px" },
          backgroundColor: "background.paper",
        }}
      >
        <CardContent sx={{ height: "100%", padding: "0" }}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            {steps[activeStep]}
            <Box display="flex" justifyContent="space-evenly" width="100%">
              <Button
                onClick={handlePrev}
                variant="outlined"
                sx={{ display: activeStep === 0 ? "none" : "block" }}
              >
                Prev
              </Button>
              <Button
                onClick={handleNext}
                variant="outlined"
                sx={{
                  display: activeStep === steps.length - 1 ? "none" : "block",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
