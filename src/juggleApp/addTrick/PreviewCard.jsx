import { Fragment } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function PreviewCard({ trickInfo }) {
  return (
    <Fragment>
      <Typography variant="h4">Trick Preview</Typography>
      <Box sx={{ width: "90%" }}>
        <Typography variant="subtitle2" align="left">
          Here is the information about your trick:
        </Typography>
        <List
          sx={{ border: "1px solid", borderRadius: "4px", height: "300px" }}
        >
          <ListItem>
            <ListItemText>Trick name: {trickInfo.name}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Number of Balls: {trickInfo.balls}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Trick Prerequisites:{" "}
              {trickInfo.prereqs.map((prereq) => prereq + ", ")}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Animation Preview:</ListItemText>
            <Box>
              {trickInfo.animation ? (
                <img alt="Animation preview" src={trickInfo.animation} />
              ) : (
                <Box
                  sx={{
                    width: "80px",
                    height: "100px",
                    border: "1px solid",
                    paddingTop: "12px",
                    textAlign: "center",
                  }}
                >
                  No Preview Available
                </Box>
              )}
            </Box>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
}
