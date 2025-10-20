import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { Box, Divider, Paper } from "@mui/material";
import { CompanyCard } from "./CompanyCard";

export const Experience = () => {
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
            period="Feb, 2025 - Present"
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
      </Paper>
    </ThemeProvider>
  );
};
