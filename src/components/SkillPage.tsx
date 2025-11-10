import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";

export const SkillPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          py: 1,
          mt: 1,
          borderRadius: 0,
          fontFamily: "monospace",
          flexGrow: 1,
        }}
      ></Paper>
    </ThemeProvider>
  );
};
