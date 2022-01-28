import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import AllTricks from "../tricks/AllTricks";

export default function DesktopNav() {
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
      <p>{menuItem.menuTitle}</p>
    </Link>
  ));

  return (
    <Fragment>
      <Logo />
      <Box sx={{ paddingTop: "124px" }}>
        <hr />
        <section style={{ margin: "12px" }}>{getMenuSection}</section>
        <hr />
        <AllTricks />
      </Box>
    </Fragment>
  );
}
