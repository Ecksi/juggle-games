import { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import OneLineCard from "./OneLineCard";
import BallCard from "./BallCard";
import PreReqCard from "./PreReqCard";
import PreviewCard from "./PreviewCard";
import "./AddTrick.css";

export default function AddTrick() {
  const [activeStep, setActiveStep] = useState(0);
  const [trickInfo, setTrickInfo] = useState({
    name: "",
    balls: "3",
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
    activeStep + 1 === steps.length
      ? setActiveStep(0)
      : setActiveStep(activeStep + 1);
  };

  const handleSubmit = () => {
    // TODO: this fucntion
  };

  const addNameCard = (
    <OneLineCard
      trickInfo={trickInfo}
      setTrickInfo={setTrickInfo}
      error={!trickInfo.name.length}
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
          height: { xs: "80vh", md: "500px" },
          width: { xs: "100%", md: "600px" },
          backgroundColor: "background.paper",
        }}
      >
        <CardContent sx={{ height: "100%", padding: "24px" }}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            {steps[activeStep]}
            <Box
              display="flex"
              justifyContent={activeStep === 0 ? "flex-end" : "space-between"}
              width="100%"
              marginBottom="12px"
            >
              <Button
                onClick={handlePrev}
                variant="outlined"
                sx={{
                  display: activeStep === 0 ? "none" : "block",
                  marginLeft: "18px",
                }}
              >
                Prev
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  disabled={!trickInfo.name.length}
                  onClick={handleSubmit}
                  variant="outlined"
                  sx={{ marginRight: "18px" }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  disabled={!trickInfo.name.length}
                  onClick={handleNext}
                  variant="outlined"
                  sx={{ marginRight: "18px" }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
