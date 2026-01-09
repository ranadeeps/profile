import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { DarkTheme } from "../Themes";
import { useLocation } from "react-router";
import NavbarButton from "./NavbarButton";

export const Navbar = () => {
  const location = useLocation();
  return (
    <ThemeProvider theme={DarkTheme}>
      <nav>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            pb: 1,
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
            <p className="text-2xl">RANADEEP REDDY SHYAMAKURA</p>

            <Stack direction="row" spacing={2}>
              <Box display={"flex"}>
                <NavbarButton
                  label="Home"
                  href="/home"
                  underline={location.pathname.includes("home")}
                />
              </Box>

              <Box display="flex">
                <NavbarButton
                  label="Experience"
                  href="/experience"
                  underline={location.pathname.includes("experience")}
                />
              </Box>

              <Box display="flex">
                <NavbarButton
                  label="Resume"
                  href="/resume"
                  underline={location.pathname.includes("resume")}
                />
              </Box>
            </Stack>
          </Stack>

          {/* Mobile Navbar */}
          <Stack
            direction="column"
            justifyContent="center"
            sx={{ display: { xs: "flex", md: "none" }, mt: 0 }}
          >
            <Typography
              variant="h6"
              sx={{ whiteSpace: "nowrap" }}
              textAlign={"center"}
            >
              RANADEEP REDDY SHYAMAKURA
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              sx={{ display: { xs: "flex", md: "none" }, mt: 0 }}
            >
              <NavbarButton
                label="Home"
                href="/home"
                underline={location.pathname.includes("home")}
              />
              <NavbarButton
                label="Experience"
                href="/experience"
                underline={location.pathname.includes("experience")}
              />
              <NavbarButton
                label="Resume"
                href="/resume"
                underline={location.pathname.includes("resume")}
              />
            </Stack>
          </Stack>
        </Paper>
      </nav>
    </ThemeProvider>
  );
};
