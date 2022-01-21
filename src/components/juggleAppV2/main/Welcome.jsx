import { Box, Typography } from "@mui/material";
import MenuIcon from "../../../assets/img/icons/icon-4b-juggling-bw.png";

export default function Welcome() {
  return (
    <Box>
      <Typography variant="h6">
        Welcome to Juggle Games. Here you will find stuff about cats and
        juggling. Also probably a link to order a{" "}
        <a href="https://bonfireburritos.com/">burrito</a> somewhere..
      </Typography>
      <Typography sx={{ display: { xs: "block", md: "none" } }}>
        Mobile Instructions: Press the
        <img alt="menu icon" src={MenuIcon} width="24px" /> to see the menu.
        Press on a trick to see that trick.
      </Typography>
      <Typography sx={{ display: { xs: "none", md: "block" } }}>
        Desktop Instructions: Use the Navigation Menu on the left hand side of
        the screen to select a trick you want to see
      </Typography>
    </Box>
  );
}
