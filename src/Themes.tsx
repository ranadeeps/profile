import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", // page background
      paper: "#000000", // surfaces like AppBar, Cards, etc.
    },
    primary: { main: "#32CD32" },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { color: "white", fontFamily: "monospace" } },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: "monospace", color: "#32CD32" },
      },
    },
  },
});
export const LightTheme = createTheme({ palette: { mode: "light" } });
