// import { Fragment } from "react";
import { Box } from "@mui/material";
import juggleMan from "../../assets/img/icons/juggle-man.gif";
import "./Logo.css";

// add position prop. left - center - right
export default function Logo({ size = "m", position = "center" }) {
  const juggleManSize = {
    m: { width: "75px", top: "46px", left: "46px" },
  };

  const juggleTextProp = {
    m: { top: "8px", left: "76px" },
  };

  const juggleTextSize = {
    m: { height: "75px", fontSize: "14px" },
  };

  const logoText = ["J", "u", "g", "g", "l", "e", " ", "G", "a", "m", "e", "s"];

  return (
    <Box
      sx={{
        position: "relative",
        // height: "124px",
        left: "50%",
        transform: { xs: "translateX(-25%)", md: "translateX(-40%)" },
      }}
    >
      <section className="text-prop" style={juggleTextProp[size]}>
        <h1>
          {logoText.map((text, i) => (
            <span
              key={i}
              className={`char-${i} juggle-games-text`}
              style={juggleTextSize[size]}
            >
              {text}
            </span>
          ))}
        </h1>
      </section>
      <img
        alt="A stick man juggling 3 red balls"
        className="juggle-man"
        src={juggleMan}
        style={juggleManSize[size]}
      />
    </Box>
  );
}
