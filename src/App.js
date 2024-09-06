import React from "react"
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/ErrorPage";
import Unauthorized from "./pages/Unauthorized";

const StyledMain = styled.div`

`

function App() {
    return (
    <div className="">
        <Header />
        <StyledMain>
            <HomePage />
        </StyledMain>  
        <Footer />
      </div>
    );
  }

export default App