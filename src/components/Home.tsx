import { Box, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import Marquee from "react-fast-marquee";

export const Home = () => {
  const skills = [
    "Web Development",
    "Node.js",
    "Express.js",
    "Typescript",
    "Javascript",
    "React",
    "SQL",
    "Oracle DB",
  ];
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: 0,
          fontFamily: "monospace",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4">
          Hi, Welcome to ranadeep's cyber space!
        </Typography>
        <br />
        <Typography variant="body1" align="justify">
          I'm an three year experienced backend developer in fintech industry
          skilled at various backend technologies. I started my career as a
          Software Engineer at CGI, worked as a full stack developer for 18
          months and later joined WebileApps (A subsidiary of Kfin technologies
          limited) as a Software Engineer and currently working here in
          developing and supporting backend for fintech products.
        </Typography>
        <Typography variant="h4" mb={0}>
          Skills
        </Typography>
        <Marquee pauseOnHover={true}>
          {skills.map((skill: string) => (
            <Box
              sx={{
                border: 1,
                borderColor: "primary.main",
                borderRadius: 0,
                p: 0.5,
                mr: 1,
              }}
            >
              <Typography variant="h6" fontStyle={"italic"}>
                {skill}
              </Typography>
            </Box>
          ))}
        </Marquee>
      </Paper>
    </ThemeProvider>
  );
};
