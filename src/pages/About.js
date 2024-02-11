import React from "react";
import Image  from 'react-bootstrap/Image';
import Teamcart from "../component/Teamcart.js";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
function About(){
    return(
        <>
      <Header/>
    <Nav/>
        <div className="c4" style={{display:"flex",margin:"15px",backgroundColor:'white'}}  >
        <ul style={{listStyle:"none"}}>
        <li><h3>Impact of the project</h3></li>
        <li>Our project has a significant impact by empowering consumers to make informed decisions,
        detect fake reviews, and avoid counterfeit products when shopping online. It contributes to a
        more trustworthy online marketplace and helps users navigate through genuine feedback for a
        better shopping experience.</li><br/>
        <li>Our project not only enhances consumer trust but also contributes to a healthier online
        ecosystem. By providing a reliable analysis of reviews, it aids in creating a transparent
        marketplace, discouraging fraudulent practices. The text summaries for comments further
        streamline the decision-making process, ensuring users can easily discern between positive and
        negative reviews.</li><br/>
        <li>Overall, our project promotes integrity and security in the online shopping landscape.</li>
        </ul>
        <Image src='asset/about.jpg'/>
        </div>
        <h3 style={{display: "flex",justifyContent: "center",fontSize:"20px"}} >Our Team</h3>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto", rowGap:"10px"}}>
        <Teamcart style={{backgroundColor:'white'}}/>
        </div>
        <br/>
        <div className="c4" style={{display:"flex",margin:"15px",backgroundColor:'white'}}  >
        <Image src='asset/about2.jpg'/>
        <ul style={{listStyle:"none"}}>
        <li><h3>Motivation</h3></li>
        <li>In today's digital landscape, online reviews guide consumers in making decisions. However, the prevalence of fake reviews threatens the trustworthiness of this valuable resource. Our graduation project is driven by the need to tackle this issue head-on</li>
        <br/>
        <li> Our goal is to develop a reliable system using advanced technology to detect and combat fake reviews. Through machine learning and efficient interfaces, we aim to provide users with accurate information, ensuring a trustworthy online marketplace
       </li>
        </ul>
        </div>
        <Footer/>
        </>
    );
    }
    export default About;