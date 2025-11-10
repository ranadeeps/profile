import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import NearMeIcon from "@mui/icons-material/NearMe";
import Marquee from "react-fast-marquee";
import { SkillBox } from "./SkillBox";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const skills = [
    { name: "Web Development", rating: 8 },
    { name: "Node.js", rating: 8 },
    { name: "Express.js", rating: 9 },
    { name: "Typescript", rating: 9 },
    { name: "Javascript", rating: 7 },
    { name: "React", rating: 6 },
    { name: "SQL", rating: 7 },
    { name: "Oracle DB", rating: 8 },
    { name: "Java", rating: 6 },
    { name: "Springboot", rating: 6 },
    { name: "Python", rating: 7 },
    { name: "AWS", rating: 6 },
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
        <Typography variant="h4">Hi, Welcome to my cyber space!</Typography>
        <br />
        <Typography variant="body1" align="justify">
          I'm an experienced backend developer in fintech, skilled at various
          backend technologies. I started my career as a Software Engineer at
          CGI, worked as a full stack developer and currently at WebileApps (A
          subsidiary of Kfin technologies limited) as a Software Engineer in
          developing and supporting backend for fintech products. I like problem
          solving and coding too
          <IconButton href="https://leetcode.com/u/Ranadeeps/" target="_blank">
            <NearMeIcon color="primary" fontSize="small"></NearMeIcon>
          </IconButton>
          .
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" mb={0}>
            Skills
          </Typography>
          <Typography
            variant="body2"
            mb={0}
            // sx={{ cursor: "pointer", color: "primary.main" }}
            // onClick={() => navigate("/skills")}
          >
            View all
          </Typography>
        </Box>

        <Marquee pauseOnHover={true} speed={100}>
          {skills.map(
            (skill: { name: string; rating: number }, index: number) => (
              <SkillBox skill={skill} key={index}></SkillBox>
            )
          )}
        </Marquee>
      </Paper>
    </ThemeProvider>
  );
};
