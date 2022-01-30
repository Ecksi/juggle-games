import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
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
    <Link to={menuItem["menuLink"]} key={i}>
      <p onClick={() => setIsOpen(false)}>{menuItem.menuTitle}</p>
    </Link>
  ));

  const menuGuts = (
    <Box>
      <Box sx={{ paddingTop: "124px" }}>
        <hr />
        <section style={{ margin: "12px" }}>{getMenuSection}</section>
        <hr />
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
            paddingTop: "12px",
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
