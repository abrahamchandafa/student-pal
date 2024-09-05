import React from "react"
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginPage";

const StyledMain = styled.div`
    min-height: 90vh
`

function App() {
    return (
    <div className="">
        <Header />
        <StyledMain>
            <LoginPage />
        </StyledMain>  
        <Footer />
      </div>
    );
  }

export default App