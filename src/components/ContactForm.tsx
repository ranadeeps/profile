import { Box, FormControl, Stack, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { CustomButton } from "./CustomButton";
import type React from "react";

export const ContactForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("on submit clicked", Object.fromEntries(data.entries()));
    event.currentTarget.reset();
  };
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%", lg: "60%" },
            margin: "auto",
          }}
          component="form"
          onSubmit={onSubmit}
        >
          <FormControl sx={{ width: "100%" }}>
            <Stack direction={"column"} spacing={2} sx={{}}>
              <TextField
                id="my-input"
                label="Name"
                slotProps={{ inputLabel: { sx: { color: "green" } } }}
                variant="outlined"
                color="primary"
                name="name"
              />
              <TextField
                id="my-input"
                label="Email"
                slotProps={{ inputLabel: { sx: { color: "green" } } }}
                variant="outlined"
                name="email"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                slotProps={{ inputLabel: { sx: { color: "green" } } }}
                multiline
                rows={4}
                name="message"
              />
              <CustomButton label="Submit" type="submit"></CustomButton>
            </Stack>
          </FormControl>
        </Box>
      </ThemeProvider>
    </>
  );
};
