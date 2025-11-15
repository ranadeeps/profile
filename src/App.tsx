import { Box, Divider } from "@mui/material";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { getRequest } from "./utils/requests";
import { useEffect } from "react";
import { SkillPage } from "./components/SkillPage";
import { Connect } from "./components/Connect";

function App() {
  const create_log = async () => {
    try {
      const referenceId = localStorage.getItem("referenceId");
      const { data }: { data: any; error: any; message: any } =
        await getRequest(`/analytics/create-log`, { referenceId: referenceId });
      localStorage.setItem("referenceId", data.uuid);
    } catch (error) {
      console.error("Error in logging", error);
    }
  };

  useEffect(() => {
    create_log();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        width: { xs: "100%", sm: "100%", md: "80%", lg: "60%" },
        minHeight: "100vh",
        // backgroundImage: "url('/src/assets/bg_img.jpg')",
        // backgroundSize: "cover",
      }}
      margin={"auto"}
    >
      <BrowserRouter>
        <Navbar></Navbar>

        <Divider
          sx={{
            color: "primary.main",
            border: 1,
            borderWidth: 5,
          }}
        ></Divider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/experience" element={<Experience></Experience>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/skills" element={<SkillPage></SkillPage>}></Route>
          <Route path="/connect" element={<Connect></Connect>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Box>
  );
}

export default App;
