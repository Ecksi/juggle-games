import { Box } from "@mui/material";
import LearnToJuggleCard from "./LearnToJuggleCard";

export default function LearnToJuggle() {
  const steps = {
    step1: {
      numOfBalls: 1,
      header: "Getting Started",
      steps: [
        "toss it around, get comfortable with it",
        "throw it straight up, aim to acheive the same height with each throw",
        " try it in the other hand now",
        " now throw the ball from hand to hand aiming to hit the same height you practiced with earlier",
      ],
    },
    step2: {
      numOfBalls: 2,
      header: "Moving on up",
      steps: [
        "hold 1 ball in each hand",
        "throw the ball in your dominant hand to your other hand",
        "while the ball is in the air, throw the ball from your other hand to your dominant",
        "be sure to work on this starting from your non-dominant hand as well",
      ],
    },
    step3: {
      numOfBalls: 3,
      header: "3 balls!",
      steps: [
        "hold 2 balls in your dominant hand and 1 in your off hand",
        " throw a ball from your dominant hand",
        " while that ball is in the air throw a ball from your other hand to your dominant hand exactly like in step 2",
        "follow up by throwing the last ball from your non-dominant hand to your dominant",
        "stop throwing after this thrid throw- congratulations you have flashed the cascade",
        "be sure to work on this starting from your non-dominant hand as well",
      ],
    },
    step4: {
      numOfBalls: 3,
      header: "Now you've got it",
      steps: [
        "put it all together",
        "using counting as a tool to help you",
        "increase 1 by 1... 1, 2, 3, 4, stop. 1, 2, 3, 4, 5, stop. build and build",
      ],
    },
    step5: {
      numOfBalls: 3,
      header: "Improving your skills",
      steps: [
        "additional tips",
        "focus on consistent throws",
        "it is a lot easier to catch when you can count on the ball landing in the same place",
      ],
    },
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <LearnToJuggleCard step={steps.step1} />
      <LearnToJuggleCard step={steps.step2} />
      <LearnToJuggleCard step={steps.step3} />
      <LearnToJuggleCard step={steps.step4} />
      <LearnToJuggleCard step={steps.step5} />
      Next Steps
    </Box>
  );
}
