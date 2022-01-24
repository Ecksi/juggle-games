import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import MobileNav from "../nav/MobileNav";
import DesktopNav from "../nav/DesktopNav";
import "./Main.css";

export default function Main() {
  return (
    <Container className="main-content-container">
      <Box
        sx={{ display: { xs: "block", md: "grid" } }}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/* BoxWrappers for Grid are inside the components */}
        <MobileNav />
        <DesktopNav />
        <Box gridColumn="span 1"></Box>
        <Box gridColumn="span 8" sx={{ paddingRight: "18px" }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
}
