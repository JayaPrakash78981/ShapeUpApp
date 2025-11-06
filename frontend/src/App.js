import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import theme from "./theme";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import Features from "./pages/Features";
import Workouts from "./pages/Workouts";
import BMRCalculator from "./pages/BMRCalculator";
import NutritionChecker from "./pages/NutritionChecker";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.05
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ToastContainer />
        <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header />
          </motion.div>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/features" element={<Features />} />
              <Route path="/pages/workouts" element={<Workouts />} />
              <Route
                path="/pages/nutrition-checker"
                element={<NutritionChecker />}
              />
              <Route path="/pages/bmr-calculator" element={<BMRCalculator />} />
              <Route path="/pages/about" element={<About />} />

              {/* Public Route */}
              <Route path="" element={<PublicRoute />}>
                <Route path="/pages/register" element={<Register />} />
                <Route path="/pages/login" element={<Login />} />
              </Route>

              {/* Private Route */}
              <Route path="" element={<PrivateRoute />}>
                <Route path="/pages/profile/*" element={<Profile />} />
              </Route>

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
