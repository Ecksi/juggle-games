import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import MobileNav from "../nav/MobileNav";
// import DesktopNav from "../nav/DesktopNav";
import Navigation from "../nav/Navigation";

export default function JuggleApp() {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "grid" },
        maxWidth: "100%",
        minHeight: "100vh",
        padding: "8px",
      }}
      gridTemplateColumns="repeat(13, 1fr)"
    >
      <Navigation />
      <Box gridColumn="span 1" />
      <Box gridColumn="span 8">
        <Outlet />
      </Box>
      <Box gridColumn="span 1" />
    </Box>
  );
}
