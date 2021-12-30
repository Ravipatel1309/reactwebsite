import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Footer from "./Footer";
// import {Navigate} from 'react-router-dom';


const App = ()=>{
  return(
    <>
     <Navbar />
    <Routes>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/service" element={<Service/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route exact path="/" element={<Home/>} />
      {/* <Navigate to="/"/> */}
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
