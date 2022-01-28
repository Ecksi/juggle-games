import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import MobileNav from "../nav/MobileNav";
import DesktopNav from "../nav/DesktopNav";

export default function Main() {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "grid" },
        maxWidth: "100%",
        minHeight: "100vh",
        padding: "8px",
      }}
      gridTemplateColumns="repeat(12, 1fr)"
    >
      <Box sx={{ display: { md: "none" } }}>
        <MobileNav />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }} gridColumn="span 3">
        <DesktopNav />
      </Box>
      <Box gridColumn="span 1"></Box>
      <Box gridColumn="span 8" sx={{ paddingRight: { xs: "0", md: "18px" } }}>
        <Outlet />
      </Box>
    </Box>
  );
}
