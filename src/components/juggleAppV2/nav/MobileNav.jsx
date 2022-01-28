import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import AllTricks from "../tricks/AllTricks";
import Logo from "../logo/Logo";
import MenuIcon from "../../../assets/img/icons/menu-o.png";
import MenuIconHover from "../../../assets/img/icons/menu-c.png";
import "./Navigation.css";

export default function MobileNav() {
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
        <Box className="thisBox" sx={{ paddingTop: "124px" }}>
          <hr />
          <section style={{ margin: "12px" }}>{getMenuSection}</section>
          <hr />
          <AllTricks setIsOpen={setIsOpen} />
        </Box>
      </Drawer>
    </Box>
  );
}
