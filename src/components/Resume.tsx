import { Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import { useEffect } from "react";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";
export const Resume = () => {
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }
  useEffect(() => {
    // This effect runs once after the component mounts
    // and triggers a redirect to the specified URL.
    window.location.replace(
      "https://ranadeepreddyshyamakura.info/mdms/ranadeep_cv.pdf"
    );
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          px: 2,
          py: 1,
          mt: 1,
          borderRadius: 0,
          fontFamily: "monospace",
        }}
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
        <Typography variant="h3">Redirecting...</Typography>
        <Typography>You are being redirected to an external site.</Typography>
      </Paper>
    </ThemeProvider>
  );
};
