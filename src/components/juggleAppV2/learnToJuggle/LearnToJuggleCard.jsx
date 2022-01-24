import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

const steps = [
  {
    numOfBalls: 1,
    header: "Getting Started",
    steps: [
      "toss it around, get comfortable with it",
      "throw it straight up, aim to acheive the same height with each throw",
      " try it in the other hand now",
      " now throw the ball from hand to hand aiming to hit the same height you practiced with earlier",
    ],
  },
  {
    numOfBalls: 2,
    header: "Moving on up",
    steps: [
      "hold 1 ball in each hand",
      "throw the ball in your dominant hand to your other hand",
      "while the ball is in the air, throw the ball from your other hand to your dominant",
      "be sure to work on this starting from your non-dominant hand as well",
    ],
  },
  {
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
  {
    numOfBalls: 3,
    header: "Now you've got it",
    steps: [
      "put it all together",
      "using counting as a tool to help you",
      "increase 1 by 1... 1, 2, 3, 4, stop. 1, 2, 3, 4, 5, stop. build and build",
    ],
  },
  {
    numOfBalls: 3,
    header: "Improving your skills",
    steps: [
      "additional tips",
      "focus on consistent throws",
      "it is a lot easier to catch when you can count on the ball landing in the same place",
    ],
  },
];

export default function LearnToJuggleCard({
  step = "0",
  handleNext,
  handlePrev,
}) {
  return (
    <Card sx={{ marginTop: "32px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {steps[step].header}
        </Typography>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Number of Balls:
          {steps[step].numOfBalls}
        </Typography>
        <List>
          Steps for this trick
          {steps[step].steps}
        </List>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </CardContent>
    </Card>
  );
}
