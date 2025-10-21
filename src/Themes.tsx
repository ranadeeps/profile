import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242124", // page background
      paper: "#242124", // surfaces like AppBar, Cards, etc.
    },
    primary: { main: "#4CAF50" },
    secondary: { main: "#242124" },
    text: {
      primary: "#4CAF50",
      secondary: "#242124",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { color: "white", fontFamily: "monospace" } },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: "monospace", color: "#4CAF50" },
      },
    },
  },
});
export const LightTheme = createTheme({ palette: { mode: "light" } });
