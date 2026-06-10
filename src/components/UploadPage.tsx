import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import React, { type FormEvent } from "react";
import { MuiFileInput } from "mui-file-input";
const UploadPage = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [fileType, setFileType] = React.useState("");

  const handleFileTypeChange = (event: SelectChangeEvent) => {
    setFileType(event.target.value as string);
  };
  const handleChange = (newValue: any) => {
    setFile(newValue);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    const formElement = event.currentTarget; // Keep a reference to the form element
    const formElements = formElement.elements as any;
    const password = formElements.password.value;

    formData.append("file", file as File);
    formData.append("fileType", fileType);
    formData.append("password", password);

    try {
      const response = await fetch(
        "https://ranadeepreddyshyamakura.info/api/profile/upload-file",
        {
          method: "POST",
          body: formData,
        },
      );
      if (response.ok) {
        alert("Form submitted successfully!");
        setFile(null);
        setFileType("");
        formElement.reset();
      } else {
        alert(`File upload failed ${response.text()}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
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
      <Typography variant="h4" mb={0}>
        Upload Files{" "}
      </Typography>
      <div className="w-1/2 mx-auto">
        <form
          id="upload-form"
          className="flex flex-col gap-2"
          onSubmit={onSubmit}
        >
          <div className="flex flex-row gap-2">
            <label htmlFor="password" className="text-xl mr-4">
              Enter password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border-1 outline-none rounded-xs p-2"
              required
            ></input>
          </div>
          <div className="w-full">
            <FormControl sx={{ width: "100%" }}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "text.primary" }}
              >
                File type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fileType}
                label="File Type"
                onChange={handleFileTypeChange}
                required
                name="fileType"
              >
                <MenuItem value={"resume"}>Resume</MenuItem>
              </Select>
            </FormControl>
          </div>
          <MuiFileInput
            placeholder="Insert a file"
            value={file}
            onChange={handleChange}
            required
            name="file"
          ></MuiFileInput>
          <button
            type="submit"
            className="text-xl border-1 rounded-xs hover:bg-primary hover:text-secondary cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </Paper>
  );
};

export default UploadPage;
