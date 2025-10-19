import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { DarkTheme } from "../Themes";
import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        variant="outlined"
        elevation={24}
        sx={{
          width: "100%",
          margin: "auto",
          marginTop: "10px",
          padding: 1,
          fontSize: "1.5em",
          fontFamily: "monospace",
        }}
      >
        <Stack
          direction="row"
          spacing={10}
          sx={{ justifyContent: "center", alignItems: "center", m: "auto" }}
        >
          <Box>
            <Typography variant="h6">RANADEEP REDDY SHYAMAKURA</Typography>
          </Box>
          <Stack
            direction="row"
            display={{ xs: "none", md: "inherit" }}
            spacing={1}
          >
            <Box>
              <CustomButton label="Home" href="/home"></CustomButton>
            </Box>
            <Box>
              <CustomButton
                label="Experience"
                href="/experience"
              ></CustomButton>
            </Box>
            <Box>
              <CustomButton label="Resume" href="/resume"></CustomButton>
            </Box>
            <Box>
              <CustomButton label="Contact" href="/contact"></CustomButton>
            </Box>
            <Box>
              <CustomButton label="Social" href="/social"></CustomButton>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          display={{ xs: "flex", md: "none" }}
          width="fit-content"
          margin={"auto"}
          spacing={1}
        >
          <Box>
            <CustomButton label="Home" href="/home"></CustomButton>
          </Box>
          <Box>
            <CustomButton label="Experience" href="/experience"></CustomButton>
          </Box>
          <Box>
            <CustomButton label="Resume" href="/resume"></CustomButton>
          </Box>
          <Box>
            <CustomButton label="More" href="/more"></CustomButton>
          </Box>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};
