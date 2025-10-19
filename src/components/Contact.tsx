import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { ContactForm } from "./ContactForm";
export const Contact = () => {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Paper
          variant="outlined"
          sx={{ m: "auto", mt: "5px", width: "100%", padding: 1 }}
        >
          <ContactForm></ContactForm>
        </Paper>
      </ThemeProvider>
    </>
  );
};
