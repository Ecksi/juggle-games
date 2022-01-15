import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

export default function LearnToJuggleCard({step}) {
  return (
    <Card sx={{ minWidth: 275, width: 500, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {step.header}
        </Typography>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Number of Balls: {step.numOfBalls}
        </Typography>
        <List>
          {step.steps.map(step => 
            <ListItem alignItems="flex-start">
              <Typography variant="body1">
                {step}
              </Typography>
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  );
}
