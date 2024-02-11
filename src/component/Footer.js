import React from 'react';
import{ NavLink }from'react-router-dom';
import Image  from 'react-bootstrap/Image';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
function Footer(){
return(
     <div className='c3'style={{backgroundColor:"white",marginTop:"30px"}} >
    <ul style={{paddingLeft:"200px"}}>
    <li style={{display:"inline"}}><Image src="asset/logo.png" width={50} style={{marginTop: "-35px"}} /></li>
    <li style={{display:"inline-block" , fontSize:"12px"}}><h3>Econfiy</h3></li>
    <li className='colgry'>Best information about the</li>
    <li className='colgry'>company gies here but now lorem </li>
    <li className='colgry'>ipsum is</li>  
    <li className='colgry'><FaFacebook/>  <FaTwitter/>   <FaLinkedin/>   <FaInstagram/>   <FiYoutube/>   </li>
    </ul>
    <ul>
        <li>About</li>
        <NavLink to="/About" style={{textDecorationLine:"none"}}> <li className='colgry'>About Us</li></NavLink>
        <NavLink to="/Home"style={{textDecorationLine:"none"}}><li className='colgry'>Categories</li></NavLink>

    </ul>
    <ul>
        <li>Get Started</li>
        <NavLink to="/Home" style={{textDecorationLine:"none"}}><li className='colgry'>Home</li></NavLink>
        <NavLink to="/SignUp"style={{textDecorationLine:"none"}}> <li className='colgry'>Register</li></NavLink>
        <NavLink to="/SignIn"style={{textDecorationLine:"none"}}><li className='colgry'>Log In</li></NavLink>
    </ul>
    <ul>
        <li>Information</li>
        <NavLink to="/Contact"style={{textDecorationLine:"none"}}> <li className='colgry'>Help</li></NavLink>
        <NavLink to="/Contact"style={{textDecorationLine:"none"}}> <li className='colgry'>Contact Us</li></NavLink>
    </ul>
    <ul>
        <li>For User</li>
        <NavLink to="/SignIn"style={{textDecorationLine:"none"}}><li className='colgry'>Log In</li></NavLink>
        <NavLink to="/SignUp"style={{textDecorationLine:"none"}}> <li className='colgry'>Register</li></NavLink>
        <NavLink to="/Favorites"style={{textDecorationLine:"none"}}> <li className='colgry'>Favorites</li></NavLink>
        <NavLink to="/Setting"style={{textDecorationLine:"none"}}><li className='colgry'>Setting</li></NavLink>    </ul>
    <ul>
        <li>Get App</li>
        <li><button style={{color:"white", backgroundColor:"black", padding:"5px",border:"1px solid black", borderRadius:"5px" ,fontSize:'10px'}}><FaApple/>App Store</button></li>
        <li><button style={{color:"white", backgroundColor:"black", padding:"5px",border:"1px solid black", borderRadius:"5px" ,fontSize:'10px'}}><FaGooglePlay/>Google Play</button></li>
    </ul>
    <div style={{backgroundColor:"#EFF2F4",color:"gray"}}>
        <p style={{display:"inline" ,paddingLeft:"50px",marginRight:"700px"}}>© 2024 Ecommerce</p>
        <p style={{display:"inline-block"}}>Analysis fake reviews in amazon</p>
    </div>
    </div>
)
}
export default Footer;