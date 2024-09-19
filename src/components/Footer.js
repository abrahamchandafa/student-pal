import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: var(--bs-dark);
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    color: var(--bs-light);
    font-size: 1.4em;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter className="sticky-bottom">
        <div className="row align-items-center">
            <div className="col-4"><p className="text-secondary">stay connected on social media:</p></div>
            <div className="col-5"></div>
            <div className="col-3">
                <a target='_blank' href="https://www.facebook.com/abraham.ernest.52" ><i className="bi bi-facebook me-4" ></i></a>
                <a target='_blank' href="https://www.instagram.com/abraham.chandy__"><i className="bi bi-instagram me-4"></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/abrahamchandafa"><i className="bi bi-linkedin me-4"></i></a>
                <a target='_blank' href="mailto:abrahamchandafa@gmail.com"><i className="bi bi-envelope me-4"></i></a>
                <a target='_blank' href="https://wa.me/85267154982"><i className="bi bi-whatsapp me-4"></i></a>

            </div>
        </div>
        </StyledFooter>
    )
}

export default Footer