import {
  Alert,
  Box,
  FormControl,
  Paper,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { CustomButton } from "./CustomButton";
import React from "react";
import { postRequest } from "../utils/requests";

export const ContactForm = () => {
  interface State {
    open: boolean;
    message: string;
    severity: "success" | "error";
  }
  const [state, setState] = React.useState<State>({
    message: "",
    open: false,
    severity: "success",
  });
  const { message, open, severity } = state;
  const handleClick = (state: {
    message: string;
    severity: "success" | "error";
  }) => {
    setState({ message: state.message, open: true, severity: state.severity });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.log("on submit clicked", Object.fromEntries(data.entries()));
    const response = await postRequest("/profile/receive-message", payload);
    if (response.error) {
      handleClick({ message: response.message, severity: "error" });
    } else {
      handleClick({ message: response.data.message, severity: "success" });
    }
    form.reset();
  };
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        key={"top" + "center"}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
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
              id="name"
              label="Name"
              slotProps={{ inputLabel: { sx: { color: "primary.main" } } }}
              variant="outlined"
              color="primary"
              name="name"
              required
            />
            <TextField
              id="email"
              label="Email"
              slotProps={{ inputLabel: { sx: { color: "primary.main" } } }}
              variant="outlined"
              name="email"
              type="email"
              required
            />
            <TextField
              id="message"
              label="Message"
              slotProps={{ inputLabel: { sx: { color: "primary.main" } } }}
              multiline
              rows={4}
              name="message"
              required
            />
            <CustomButton label="Submit" type="submit"></CustomButton>
          </Stack>
        </FormControl>
      </Box>
    </Paper>
  );
};
