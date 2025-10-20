import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type React from "react";
import { DarkTheme } from "../Themes";

export const CompanyCard: React.FC<{
  companyName: string;
  period: string;
  designation: string;
  location: string;
}> = (props) => {
  const responsiveFontSize = {
    xs: "0.8rem", // mobile
    sm: "0.8rem", // tablet
    md: "0.8rem", // small laptop
    lg: "1rem", // desktop
    xl: "1rem", // large screen
  };
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
          py: 1,
          mt: 1,
          borderRadius: 0,
          fontFamily: "monospace",
        }}
      >
        <Card
          sx={{ minWidth: 0, p: 0, borderColor: "primary.main" }}
          elevation={0}
          variant="outlined"
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                component="div"
                flexWrap={"wrap"}
                width={"50%"}
                textAlign={"left"}
                sx={{
                  fontSize: responsiveFontSize,
                }}
              >
                {props.companyName}
              </Typography>

              <Typography
                component="div"
                flexWrap={"wrap"}
                width={"50%"}
                textAlign={"right"}
                sx={{
                  fontSize: responsiveFontSize,
                }}
              >
                {props.period}
              </Typography>
            </Box>

            <Typography
              textAlign={"left"}
              sx={{
                mt: 1,
                color: "text.primary",
                fontSize: responsiveFontSize,
              }}
            >
              {props.designation} {bull} {props.location}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </ThemeProvider>
  );
};
