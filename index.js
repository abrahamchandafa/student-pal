import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from "./src/App"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)







/**
var()
--bs-primary
--bs-secondary
--bs-success
--bs-info
--bs-warning
--bs-danger
--bs-light
--bs-dark

classes
text-primary
text-secondary
text-success
text-info
text-warning
text-danger
text-light
text-dark
bg-primary
bg-secondary
bg-success
bg-info
bg-warning
bg-danger
bg-light
bg-dark

$primary
$secondary
$success
$info
$warning
$danger
$light
$dark
 */