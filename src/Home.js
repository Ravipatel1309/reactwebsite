import React from 'react';
// import photo from "./com.png";
import bg2 from "./bg2.svg";
import Common from "./Common";
// import {NavLink} from "react-router-dom";
import Service from "./Service";
// import About from "./About";
import Contact from "./Contact";

const Home = () =>{
    return(
        <>
        <Common 
        name="Grow your business with"
        imgsrc={bg2}
        visit="/service"
        btname ="Get Started"
        />
        <Service/>
        {/* <About/> */}
        <Contact/>
        </>
    )
}

export default Home;