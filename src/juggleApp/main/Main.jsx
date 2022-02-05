import * as React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import JuggleApp from "./JuggleApp";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ColorModeWrapper({ app }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "background.default" : "divider",
      }}
    >
      <IconButton
        onClick={colorMode.toggleColorMode}
        sx={{
          position: "absolute",
          right: "0",
          margin: { xs: "0", md: "16px 16px 0 0" },
          color: "text.primary",
        }}
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      {app}
    </Box>
  );
}

export default function Main() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ColorModeWrapper app={<JuggleApp />} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
