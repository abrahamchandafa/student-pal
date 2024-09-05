import React from "react"

const LoginPage = () => {
    return (
        <div className="bg-light" style={{margin: '50px', height: "70vh", padding: "50px", alignContent: "center"}}>
            <div style={{margin: '0px'}}>
            <h1 className="text-center text-primary">Login</h1>
            <form>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address/ School ID Number:</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <div className="mb-3">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>           
            </div>
        </div>

    )
}

export default LoginPage
