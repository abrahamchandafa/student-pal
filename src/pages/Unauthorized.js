import React from "react"

const Unauthorized = () => {
    return (
        <div className="bg-light" style={{margin: '50px', height: "80vh", padding: "50px", alignContent: "center"}}>
            <div style={{margin: '0px'}}>
            <h1 className="text-center text-primary">Oops...</h1>
               <h1 className="text-center">You don't have access... please contact admin <i className=" text-center bi bi-emoji-frown-fill"></i> </h1>             
            </div>
        </div>

    )
}

export default Unauthorized