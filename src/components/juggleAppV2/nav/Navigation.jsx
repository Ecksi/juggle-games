import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AllTricks from "../tricks/AllTricks";

export default function Navigation() {
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

  const getMenuSection = menuSection.map((menuItem) => (
    <Link to={menuItem["menuLink"]}>
      <p>{menuItem.menuTitle}</p>
    </Link>
  ));

  return (
    <Box className="thisBox" sx={{ paddingTop: "124px" }}>
      <hr />
      <section style={{ margin: "12px" }}>{getMenuSection}</section>
      <hr />
      <AllTricks />
    </Box>
  );
}
