import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AllTricks from "../tricks/AllTricks";
import Logo from "../logo/Logo";
import MenuIcon from "../../assets/img/icons/menu-o.png";
import MenuIconHover from "../../assets/img/icons/menu-c.png";
import "./Navigation.css";

export default function Navigation() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuSection = [
    {
      menuTitle: "Learn to Juggle",
      menuLink: "/learntojuggle",
    },
    {
      menuTitle: "Add a Trick",
      menuLink: "/addtrick",
    },
    {
      menuTitle: "Login",
      menuLink: "/login",
    },
  ];

  const getMenuSection = menuSection.map((menuItem, i) => (
    <Link to={menuItem["menuLink"]} key={i} style={{ textDecoration: "none" }}>
      <Paper
        onClick={() => setIsOpen(false)}
        sx={{
          padding: "4px 16px",
          color: "text.primary",
          fontWeight: "normal",
          fontSize: "1.10rem",
          ":hover": { backgroundColor: "divider" },
          backgroundColor: "transparent",
          borderRadius: "0",
          boxShadow: "none",
        }}
      >
        {menuItem.menuTitle}
      </Paper>
    </Link>
  ));

  const menuGuts = (
    <Box>
      <Box
        sx={{
          marginTop: "136px",
          borderTop: "2px solid",
          borderBottom: "2px solid",
        }}
      >
        {getMenuSection}
      </Box>
      <AllTricks setIsOpen={setIsOpen} />
    </Box>
  );

  return (
    <Box gridColumn="span 3">
      {/* Mobile nav-icon and menu */}
      <Box
        sx={{
          display: { md: "none" },
          position: "absolute",
          filter: theme.palette.mode === "dark" ? "invert(100%)" : "invert(0)",
        }}
      >
        <img
          alt="Menu Icon"
          src={MenuIcon}
          width="50"
          onClick={() => setIsOpen(true)}
          onMouseOut={(e) => (e.currentTarget.src = MenuIcon)}
          onMouseOver={(e) => (e.currentTarget.src = MenuIconHover)}
        />
      </Box>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ display: { md: "none" } }}
        PaperProps={{
          sx: {
            width: "80%",
            paddingTop: { sm: "0", md: "12px" },
          },
        }}
      >
        <Logo />
        {menuGuts}
      </Drawer>
      {/* Mobile nav-icon and menu */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Logo />
        {menuGuts}
      </Box>
    </Box>
  );
}
