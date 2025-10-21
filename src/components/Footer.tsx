import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
export const Footer: React.FC = () => {
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
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          justifyContent={"center"}
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
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          pb={1}
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
        </Box>
      </Paper>
    </ThemeProvider>
  );
};
