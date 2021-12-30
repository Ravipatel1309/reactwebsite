import React from 'react';
import {NavLink} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-lg-10 col-12  mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid sticky-top">
                    <div className="navbar-brand"> <strong>RaviTech</strong></div>
                    {/* <div className="navbar-brand"> <strong>Code<span className="with">with</span>Ravi</strong></div> */}
                    {/* <NavLink className="navbar-brand" to="/">Code<span className="with">with</span>Ravi</NavLink> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact activeClassName="active" exact className="nav-link" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact activeClassName="active" exact className="nav-link" to="/about">About US</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact activeClassName="active" exact className="nav-link" to="/contact">Contact US</NavLink>
                        </li>
                        
                    </ul>
                </div>
                </div>
                </nav>
        </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;
