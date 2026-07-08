import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Typography } from "@mui/material";
import { useLocation } from "react-router";
import NavbarButton from "./NavbarButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="pb-1 pt-1">
      <div className="lg:rounded-full px-2 md:px-6 sticky top-0 bg-secondary/70 backdrop-blur-lg shadow-md shadow-primary/30 border-b border-primary/50">
        <nav>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              pb: 1,
              fontFamily: "monospace",
            }}
          >
            {/* Desktop Navbar */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                fontFamily={"monospace"}
                variant={"h5"}
                letterSpacing={2}
                textTransform={"uppercase"}
              >
                Ranadeep Reddy Shyamakura
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", md: "flex" }, mt: 0 }}
              >
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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems={"center"}
                sx={{ display: { xs: "flex", md: "none" }, mt: 0 }}
              >
                <IconButton color="primary" onClick={() => setActive(true)}>
                  <MenuIcon fontSize="small"></MenuIcon>
                </IconButton>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    // Display fixed on mobile, hidden on medium screens and up
                    display: { xs: "flex", md: "none" },
                    position: "fixed",
                    top: 0,
                    // Slide off-screen (-70%) when inactive, slide in (0) when active
                    right: active ? 0 : "-70%",
                    zIndex: (theme) => theme.zIndex.drawer, // Standard MUI drawer z-index
                    bgcolor: "secondary.main",
                    width: "70%",
                    height: ["100vh", "100dvh"],
                    overflowY: "hidden",
                    // Proper transition property, duration, and timing function
                    transition: "right 0.5s ease-out",
                    overflowX: "hidden",
                  }}
                >
                  <div className="flex flex-col items-end">
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setActive(false);
                      }}
                    >
                      <CloseIcon fontSize="large"></CloseIcon>
                    </IconButton>
                    <div className="mx-auto flex flex-col items-center">
                      <NavbarButton label="Home" href="/home" />
                      <NavbarButton label="Experience" href="/experience" />
                      <NavbarButton label="Resume" href="/resume" />
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </nav>
      </div>
    </div>
  );
};
