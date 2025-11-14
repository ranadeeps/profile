import { Box, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { SkillBox } from "./SkillBox";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
export const SkillPage = () => {
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" mb={0}>
            Skills
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} gap={1}>
            <ViewListIcon></ViewListIcon>
            <GridViewIcon></GridViewIcon>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={1}
          justifyContent={"space-between"}
          p={1}
        >
          {skills.map(
            (
              skill: { name: string; rating: number; experience: number },
              index: number
            ) => (
              <SkillBox skill={skill} key={index}></SkillBox>
            )
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};
