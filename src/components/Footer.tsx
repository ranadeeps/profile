import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { Box, IconButton, Link, Paper, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router";
import { getRequest } from "../utils/requests";
import { useEffect, useState } from "react";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [visitors, setVisitors] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const get_visitors = async () => {
    try {
      const { data }: { data: any; error: any; message: any } =
        await getRequest(`/analytics/get-visitor-count`);
      setVisitors(data.count);
      setLoading(false);
    } catch (error) {
      console.error("Error in logging", error);
    }
  };

  useEffect(() => {
    get_visitors();
  }, []);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <ThemeProvider theme={DarkTheme}>
      <footer>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            borderRadius: 0,
            fontFamily: "monospace",
            backgroundColor: "primary.main",
          }}
        >
          <Box
            display={"flex"}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: { xs: "start" },
              px: 1,
            }}
            pt={1}
          >
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              gap={1}
            >
              <PhoneIcon color="secondary" fontSize="small"></PhoneIcon>
              <Typography color="secondary.main" textAlign={"center"}>
                +91 81793 57884
              </Typography>
            </Box>
            <Typography
              color="secondary.main"
              textAlign={"center"}
              display={{ xs: "none", sm: "inline-block" }}
            >
              {" "}
              {bull}{" "}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent={"center"}
            >
              <EmailIcon color="secondary" fontSize="small"></EmailIcon>
              <Typography color="secondary.main" textAlign={"center"}>
                ranadeep2104@gmail.com
              </Typography>
            </Box>{" "}
            <Typography
              color="secondary.main"
              textAlign={"center"}
              display={{ xs: "none", sm: "inline-block" }}
            >
              {" "}
              {bull}{" "}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent={"center"}
            >
              <Typography color="secondary.main" textAlign={"center"}>
                <Link
                  href="#"
                  onClick={() => navigate("/connect")}
                  color="secondary.main"
                >
                  Leave a message
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{
              justifyContent: { xs: "start", sm: "center" },
              px: 1,
            }}
          >
            <IconButton
              href="https://www.instagram.com/ranadeepreddy_s_/"
              target="_blank"
            >
              <InstagramIcon color="secondary" fontSize="small"></InstagramIcon>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/ranadeep-reddy-0baa631b0/"
              target="_blank"
            >
              <LinkedInIcon color="secondary" fontSize="small"></LinkedInIcon>
            </IconButton>
            <IconButton
              href="https://leetcode.com/u/Ranadeeps/"
              target="_blank"
            >
              <CodeIcon color="secondary" fontSize="small"></CodeIcon>
            </IconButton>
            <IconButton href="https://github.com/ranadeeps" target="_blank">
              <GitHubIcon color="secondary" fontSize="small"></GitHubIcon>
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"end"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/visitor-analytics")}
          >
            <Typography color="secondary.main" mr={1}>
              Total Visitors: {isLoading ? "... loading" : visitors}
            </Typography>
          </Box>
        </Paper>
      </footer>
    </ThemeProvider>
  );
};
