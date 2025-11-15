import { Paper, Typography } from "@mui/material";
import "../App.css";
import { ContactForm } from "./ContactForm";
export const Connect = () => {
  return (
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
      }}
    >
      <Typography variant="h4" mb={0}>
        Leave a message
      </Typography>
      <ContactForm></ContactForm>
    </Paper>
  );
};
