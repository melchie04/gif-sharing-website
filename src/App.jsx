import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { theme } from "./styles/Theme";
import Navbar, { BackToTop } from "./layouts/Navbar";
import HomePage from "./pages/Home/index";
import GifPage from "./pages/Gif/index";
import Footer from "./layouts/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gif/:id" element={<GifPage />} />
      </Routes>
      <BackToTop>
        <KeyboardArrowUp />
      </BackToTop>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
