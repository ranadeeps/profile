import { Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";

export const Home = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        variant="elevation"
        elevation={0}
        sx={{ m: "auto", mt: "5px", width: "100%", padding: 1 }}
      >
        <Typography variant="h4">
          Hi, Welcome to ranadeep's cyber space!
        </Typography>
        <br />
        <Typography variant="body1" align="justify">
          I'm an three year experienced backend developer in fintech industry
          skilled at various backend technologies. Right after my graduation I
          started my career as a Software Engineer at CGI, worked as a full
          stack developer for 18 months and later joined WebileApps (A
          subsidiary of Kfin technologies limited) as a Software Engineer and
          currently working here in developing backend for fintech products.
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};
