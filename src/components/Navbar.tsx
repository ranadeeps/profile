import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { DarkTheme } from "../Themes";
import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          width: "100%",
          px: 2,
          py: 1,
          mt: 1,
          borderRadius: 0,
          fontFamily: "monospace",
        }}
      >
        {/* Desktop Navbar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
            RANADEEP REDDY SHYAMAKURA
          </Typography>

          <Stack direction="row" spacing={2}>
            <CustomButton label="Home" href="/home" />
            {/* <CustomButton label="Experience" href="/experience" /> */}
            <CustomButton label="Resume" href="/resume" />
            {/* <CustomButton label="Contact" href="/contact" /> */}
          </Stack>
        </Stack>

        {/* Mobile Navbar */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ display: { xs: "flex", md: "none" }, mt: 0 }}
        >
          <CustomButton label="Home" href="/home" />
          {/* <CustomButton label="Experience" href="/experience" /> */}
          <CustomButton label="Resume" href="/resume" />
          {/* <CustomButton label="Contact" href="/contact" /> */}
          {/* <CustomButton label="More" href="/more" /> */}
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};
