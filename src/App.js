import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/ErrorPage";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
      <div>
        <Header />
        <Routes>

          <Route path="/homepage/" element={<HomePage />} />
          <Route path="/error/" element={<ErrorPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/unauthorized/" element={<Unauthorized />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>

  );
}

export default App;