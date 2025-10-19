import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";
export const Resume = () => {
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        variant="outlined"
        sx={{ m: "auto", mt: "5px", width: "100%", padding: 1 }}
      >
        {/* <Box>
          <Document
            file="C:\Users\Ranadeep Reddy\Downloads\aadhar.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Box> */}
      </Paper>
    </ThemeProvider>
  );
};
