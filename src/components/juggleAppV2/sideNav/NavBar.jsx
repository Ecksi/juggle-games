import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Logo from "../logo/Logo";
import MenuIcon from "../../../assets/img/icons/icon-4b-juggling-bw.png";
import MenuIconHover from "../../../assets/img/icons/icon-4b-juggling-color.png";
import AllTricks from "../tricks/AllTricks";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Box sx={{ display: { md: "none" } }}>
        <img
          alt="Menu Icon"
          src={MenuIcon}
          className="nav-toggle"
          onClick={() => setIsOpen(true)}
          onMouseOut={(e) => (e.currentTarget.src = MenuIcon)}
          onMouseOver={(e) => (e.currentTarget.src = MenuIconHover)}
        />
      </Box>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: "80%",
            paddingTop: "12px",
            backgroundColor: "#E58E35",
          },
        }}
      >
        <Logo />
        <section style={{ margin: "12px" }}>
          <Link to={`/allTricks`} onClick={() => setIsOpen(false)}>
            <p>Learn to Juggle</p>
          </Link>
          <Link to={`/addTrick`} onClick={() => setIsOpen(false)}>
            <p>Add Trick</p>
          </Link>
          <Link to={`/allTricks`} onClick={() => setIsOpen(false)}>
            <p>Login</p>
          </Link>
        </section>
        <AllTricks />
      </Drawer>
    </Fragment>
  );
}
