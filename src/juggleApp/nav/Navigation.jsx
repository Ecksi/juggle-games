// import { Link } from "react-router-dom";
// import { Box } from "@mui/material";
// import AllTricks from "../tricks/AllTricks";

// export default function Navigation({ setIsOpen = null }) {
//   const menuSection = [
//     {
//       menuTitle: "Learn to Juggle",
//       menuLink: "/learntojuggle",
//     },
//     {
//       menuTitle: "Add a Trick",
//       menuLink: "/addtrick",
//     },
//     {
//       menuTitle: "Login",
//       menuLink: "/login",
//     },
//   ];

//   const getMenuSection = menuSection.map((menuItem, i) => (
//     <Link to={menuItem["menuLink"]} key={i}>
//       <p onClick={() => setIsOpen(false)}>{menuItem.menuTitle}</p>
//     </Link>
//   ));

//   return (
//     <Box sx={{ paddingTop: "124px" }}>
//       <hr />
//       <section style={{ margin: "12px" }}>{getMenuSection}</section>
//       <hr />
//       <AllTricks setIsOpen={setIsOpen} />
//     </Box>
//   );
// }
