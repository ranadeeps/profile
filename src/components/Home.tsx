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
    { name: "Web Development", rating: 8, experience: 3 },
    { name: "Node.js", rating: 8, experience: 2 },
    { name: "Express.js", rating: 9, experience: 2 },
    { name: "Typescript", rating: 9, experience: 2 },
    { name: "Javascript", rating: 7, experience: 2 },
    { name: "React", rating: 6, experience: 1 },
    { name: "SQL", rating: 7, experience: 2 },
    { name: "Oracle DB", rating: 8, experience: 1 },
    { name: "Java", rating: 6, experience: 1 },
    { name: "Springboot", rating: 6, experience: 1 },
    { name: "Python", rating: 7, experience: 2 },
    { name: "AWS", rating: 6, experience: 1 },
  ];

  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        sx={{
          width: "auto",
          borderRadius: 0,
          fontFamily: "monospace",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: { xs: 1, sm: 0 },
        }}
      >
        <Typography variant="h4">Hi, Welcome to my cyber space!</Typography>
        <br />
        <Typography variant="h3" align="justify">
          I'm an experienced backend developer{" "}
          <IconButton
            href="#"
            onClick={() => navigate("/experience")}
            target="_parent"
            size="large"
          >
            <NearMeIcon color="primary" fontSize="large" />
          </IconButton>
          .
        </Typography>
        <Typography variant="body1" align="justify">
          I like problem solving and coding too{" "}
          <IconButton
            href="https://leetcode.com/u/Ranadeeps/"
            target="_blank"
            size="small"
          >
            <NearMeIcon color="primary" fontSize="small" />
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
            sx={{ cursor: "pointer", color: "primary.main" }}
            onClick={() => navigate("/skills")}
          >
            View all
          </Typography>
        </Box>

        <Marquee pauseOnHover={true} speed={100}>
          {skills.map(
            (
              skill: { name: string; rating: number; experience: number },
              index: number
            ) => (
              <SkillBox skill={skill} key={index}></SkillBox>
            )
          )}
        </Marquee>
      </Paper>
    </ThemeProvider>
  );
};
