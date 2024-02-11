import React from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
function Favorites(){
    return(
        <>
        <Header/>
        <Nav/>
        <div style={{height:"1000px"}}>
     
        <h1>Favorites</h1>
    
        </div>
        <Footer/>
        </>
    );
    }
export default Favorites;