import { Outlet } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import NavBar from "../sideNav/NavBar";
import "./Main.css";

export default function Main() {
  return (
    <Container className="main-content-container">
      <NavBar />
      <Typography
        sx={{
          padding: "16px 0",
          textAlign: "center",
        }}
        variant="h4"
      >
        Juggle Games
      </Typography>
      <Outlet />
    </Container>
  );
}
