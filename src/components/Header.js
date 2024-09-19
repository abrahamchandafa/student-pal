import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const StyledHeader = styled.header`
    background-color: var(--bs-dark);
    top: 0;
    left: 0;
    width: 100%;
`

const StyledH2 = styled.h2`
    margin-top: 8px;
    margin-left: -20px;
`

const Header = () => {
    return (
        <StyledHeader className="sticky-top">
            <div className="row collapse" id="navbarToggleExternalContent">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/homepage">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/unauthorized">My account</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Logout</NavLink>
                    </li>
                    <li className="nav-item">
                        <div>
                            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-translate"></i></a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Swahili</a></li>
                            <li><a className="dropdown-item" href="#">語言</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="col-1">
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="col-11 text-secondary container-fluid"><StyledH2><em>Student Pal</em></StyledH2></div>
            </div>
        </StyledHeader>
    )
}

export default Header