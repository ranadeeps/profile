import {
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, type FormEvent } from "react";
import { MuiFileInput } from "mui-file-input";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { baseURL } from "../utils/api";
import dayjs from "dayjs";
import prettyBytes from "pretty-bytes";
interface file {
  id: number;
  originalFileName: string;
  mimeType: string;
  fileSizeInBytes: number;
  fileType: string;
  createdAt: string;
}
const UploadPage = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [fileType, setFileType] = React.useState("");
  const [files, setFiles] = React.useState<file[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

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
      const response = await fetch(`${baseURL}/profile/upload-file`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFile(null);
        setFileType("");
        formElement.reset();
      } else {
        alert(`File upload failed ${(await response.json()).message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("something went wrong");
    }
  };

  const getFiles = async () => {
    try {
      const response = await fetch(`${baseURL}/files?page=${page}&limit=5`, {
        method: "GET",
      });
      if (response.ok) {
        const responseBody: {
          files: file[];
          total: number;
          limit: number;
          page: number;
          totalPages: number;
        } = await response.json();
        setFiles(responseBody.files);
        setTotalPages(responseBody.totalPages);
      }
    } catch (error) {
      alert("something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    getFiles();
  }, [page]);
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
          className="flex flex-col gap-3"
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
            <FormControl
              sx={{
                width: "100%",
                "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            >
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
                sx={{ "& .MuiSvgIcon-root": { color: "primary.main" } }}
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
            sx={{
              "& .MuiFileInput-placeholder": {
                color: "#4CAF50 !important",
                cursor: "pointer !important",
              },
              "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
              "& .MuiInputAdornment-root": {
                color: "primary.main",
              },
            }}
            clearIconButtonProps={{
              title: "Remove",
              children: <CloseIcon fontSize="small" color="primary" />,
            }}
            slotProps={{
              input: { startAdornment: <AttachFileIcon color="primary" /> },
            }}
          ></MuiFileInput>
          <button
            type="submit"
            className="text-xl border-1 rounded-xs hover:bg-primary hover:text-secondary cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-3/4 mx-auto m-2 h-max">
        {!isLoading && (
          <TableContainer component={Paper} elevation={0} sx={{ border: 1 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      fontSize: "medium",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Size</TableCell>
                  <TableCell align="right">Date created</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.originalFileName}
                    </TableCell>
                    <TableCell align="right">
                      {prettyBytes(row.fileSizeInBytes)}
                    </TableCell>
                    <TableCell align="right">
                      {dayjs(row.createdAt).format("DD-MMM-YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <Link
                        href={`${baseURL}/files/view-file/${row.id}`}
                        sx={{ cursor: "pointer" }}
                      >
                        View
                      </Link>{" "}
                      /{" "}
                      <Link
                        href={`${baseURL}/files/download-file/${row.id}`}
                        sx={{ cursor: "pointer" }}
                      >
                        Download
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div className="mx-auto my-2">
        {!isLoading && (
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            onChange={(_, page) => setPage(page)}
          />
        )}
      </div>
    </Paper>
  );
};

export default UploadPage;
