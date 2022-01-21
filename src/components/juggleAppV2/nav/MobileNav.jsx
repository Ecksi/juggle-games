import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import Logo from "../logo/Logo";
import Navigation from "./Navigation";
import MenuIcon from "../../../assets/img/icons/icon-4b-juggling-bw.png";
import MenuIconHover from "../../../assets/img/icons/icon-4b-juggling-color.png";
import "./Navigation.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Should this be a fragment and this Box wrapper should live in Main?
    <Box sx={{ display: { md: "none" } }}>
      <img
        alt="Menu Icon"
        src={MenuIcon}
        className="nav-toggle"
        onClick={() => setIsOpen(true)}
        onMouseOut={(e) => (e.currentTarget.src = MenuIcon)}
        onMouseOver={(e) => (e.currentTarget.src = MenuIconHover)}
      />
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: "80%",
            paddingTop: "12px",
            backgroundColor: "#E58E35",
            display: { md: "none" },
          },
        }}
      >
        <Logo />
        <Navigation />
      </Drawer>
    </Box>
  );
}
