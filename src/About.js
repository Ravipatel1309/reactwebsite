import React from 'react';
import photo from "./com.png";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const About = () =>{
    return(
        <>
        <Common 
        name="Welcome to About page"
        imgsrc={photo}
        visit="/contact"
        btname ="Contact Now"
        />
        </>
    )
}

export default About;