import { Box } from "@mui/material";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";

function App() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "80%", lg: "60%" },
          margin: "auto",
        }}
      >
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/experience"
              element={<Experience></Experience>}
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
