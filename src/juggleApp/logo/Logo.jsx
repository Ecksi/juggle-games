import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import jugglePerson from "../../assets/img/icons/juggle-person.gif";

// add position prop. left - center - right
export default function Logo({ size = "m", position = "center", mode }) {
  const theme = useTheme();
  const jugglePersonSize = {
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
        left: { xs: "20%", md: "15%" },
        top: { xs: "0", md: "-136px" },
      }}
    >
      <Box
        component="section"
        sx={{
          ...juggleTextProp[size],
          position: "absolute",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <Typography color="text.primary">
          {logoText.map((text, i) => (
            <span
              key={i}
              className={`char-${i}`}
              style={{
                ...juggleTextSize[size],
                position: "absolute",
                width: "10px",
                fontFamily: "MonoSpace",
                fontWeight: "bold",
                transformOrigin: "bottom center",
                transform: `rotate(${-85 + 15 * i}deg)`,
              }}
            >
              {text}
            </span>
          ))}
        </Typography>
      </Box>
      <img
        alt="A stick person juggling 3 balls"
        src={jugglePerson}
        style={{
          ...jugglePersonSize[size],
          position: "absolute",
          filter: theme.palette.mode === "dark" ? "invert(100%)" : "invert(0)",
        }}
      />
    </Box>
  );
}
