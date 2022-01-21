import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AllTricks from "../tricks/AllTricks";

export default function Navigation() {
  return (
    <Box>
      <section style={{ margin: "12px" }}>
        <Link to={`/allTricks`}>
          <p>Learn to Juggle</p>
        </Link>
        <Link to={`/addTrick`}>
          <p>Add Trick</p>
        </Link>
        <Link to={`/allTricks`}>
          <p>Login</p>
        </Link>
      </section>
      <AllTricks />
    </Box>
  );
}
