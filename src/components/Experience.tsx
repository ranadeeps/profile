import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { Box, Chip, Divider, Paper } from "@mui/material";
import { CompanyCard } from "./CompanyCard";

export const Experience = () => {
  const skills = [
    "Node JS",
    "Typescript",
    "SQL",
    "Python",
    "Javascript",
    "Java",
    "Express JS",
    "AWS",
    "Linux",
    "Springboot",
    "Oracle DB",
    "Redis",
    "PostgreSQL",
    "React JS",
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
          py: 1,
        }}
      >
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          gap={1}
        >
          <CompanyCard
            companyName="WebileApps India Pvt Ltd"
            designation="Software Engineer"
            location="Hyderabad, India"
            period="Feb, 2024 - Present"
          ></CompanyCard>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: 2,
              borderColor: "primary.main",
              height: 50, // Adjust to connect the cards
              m: "auto",
            }}
          ></Divider>
          <CompanyCard
            companyName="CGI Information Systems and Management Consultants Pvt Ltd"
            designation="Software Engineer"
            location="Bengaluru, India"
            period="Jun, 2022 - Dec, 2023"
          />
        </Box>
        <div className="rounded-xl border-1 border-primary p-2">
          <p className="text-2xl">My Skills</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {skills.map((skill: string, index: number) => (
              <Chip
                label={skill}
                color="primary"
                variant="outlined"
                key={index}
                size="medium"
              ></Chip>
            ))}
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};
