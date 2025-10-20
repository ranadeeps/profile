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
              <Typography component="div" flexWrap={"wrap"} width={"50%"}>
                {props.companyName}
              </Typography>

              <Typography component="div">{props.period}</Typography>
            </Box>

            <Typography sx={{ color: "text.primary" }}>
              {props.designation} {bull} {props.location}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </ThemeProvider>
  );
};
