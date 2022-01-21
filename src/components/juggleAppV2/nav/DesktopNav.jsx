import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import Navigation from "./Navigation";

export default function DesktopNav() {
  return (
    // Should this be a fragment and this Box wrapper should live in Main?
    <Box sx={{ display: { xs: "none", md: "block" } }} gridColumn="span 3">
      <Logo />
      <Navigation />
    </Box>
  );
}
