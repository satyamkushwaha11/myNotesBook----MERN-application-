import React from 'react'
import {Link, Redirect} from "react-router-dom";

function Navbar() {
    const logout=()=>{
        localStorage.removeItem("Token");
        console.log(localStorage);
        <Redirect to='' /> 
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/home">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/about">About</Link>
                            </li>
                        </ul>
                        <div>
                            <button className='btn btn-secondary' onClick={logout}>
                                logout
                            </button>
                        </div>

                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
