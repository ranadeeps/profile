import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";

export const Resume = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          px: 2,
          py: 1,
          mt: 1,
          borderRadius: 0,
          fontFamily: "monospace",
          height: "100dvh",
        }}
      >
        <div className="w-9/10 h-full m-auto">
          <iframe
            src="https://ranadeepreddyshyamakura.info/api/profile/view-resume"
            width={"100%"}
            height={"100%"}
            style={{ border: "none", display: "block", margin: "auto" }}
          ></iframe>
        </div>
      </Paper>
    </ThemeProvider>
  );
};
