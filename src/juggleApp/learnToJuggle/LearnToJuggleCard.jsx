import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const steps = [
  {
    numOfBalls: 1,
    header: "Getting started",
    steps: [
      "Toss the ball around to get comfortable with it",
      "In one hand toss the ball straight up, about shoulder height",
      "*The highpoint the ball reaches will be your pinnacle*",
      "Try to consistently throw the ball at this height",
      "Repeat with your other hand",
    ],
  },
  {
    numOfBalls: 1,
    header: "Baby steps",
    steps: [
      "Start with the ball in your dominant-hand",
      "Toss it to your off-hand",
      "The ball should cross your chest in a nice arc motion",
      "The highpoint (pinnacle) of your arc should happen near the center of your chest",
      "Toss it back to your dominant-hand",
    ],
  },
  {
    numOfBalls: 2,
    header: "Moving on up",
    steps: [
      "Start with 1 ball in each hand",
      "Toss the ball in your dominant-hand to your off-hand",
      "Just before the ball reaches the pinnacle of your arc..",
      "toss the ball in your off-hand to your dominant-hand",
      "This second ball should follow the same arc as primary ball with just slightly lower so they do not collide",
      "Be sure to practice starting from your non-dominant hand as well",
    ],
  },
  {
    numOfBalls: 3,
    header: "Now with 3 balls",
    steps: [
      "Start with 2 balls in your dominant-hand and 1 in your off-hand",
      "You will begin with the same process as the previous step",
      "Toss ball in dominant-hand, wait for pinnacle, toss ball in off-hand",
      "When the second ball is nearing its pinnacle, toss your last ball",
      "*Note you will catch the first toss before you throw your last throw",
      "Stop throwing after this third throw- congratulations you have just flashed the cascade!",
      "Be sure to practice starting from your non-dominant hand as well",
    ],
  },
  {
    numOfBalls: 3,
    header: "Three-ball cascade",
    steps: [
      "Put it all together, adding 1 additional throw at a time",
      "You will do the same thing as in the previous step, but instead of stopping you will continue the pattern",
      "1, 2, 3, 4 stop. 1, 2, 3, 4, 5 stop. Build and build",
    ],
  },
  {
    numOfBalls: 3,
    header: "Next Steps",
    steps: [
      "Focus on consistent throws, it is a lot easier to catch the ball if it lands in the same spot each time",
      "Learn some tricks, overthrow and jugglers tennis are great places to begin",
    ],
  },
];

export default function LearnToJuggleCard({
  step = "0",
  handleNext,
  handlePrev,
}) {
  return (
    <Card
      sx={{
        marginTop: { xs: "0", md: "32px" },
        height: { xs: "80vh", md: "500px" },
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography variant="h6" gutterBottom>
          {steps[step].header}
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Number of Balls: {steps[step].numOfBalls}
        </Typography>
        <List sx={{ flexGrow: "3" }}>
          {/* some bad naming right here.. steps step steps step */}
          {steps[step].steps.map((step, i) => (
            <ListItem key={i} disablePadding>
              <ListItemText>{step}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-around",
          }}
        >
          <Button onClick={handlePrev} variant="contained">
            Prev
          </Button>
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
