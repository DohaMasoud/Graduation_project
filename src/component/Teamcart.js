import Card from 'react-bootstrap/Card';
import Team from "../team.json";
import './teamcart.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
console.log(Team);
function Teamcart() {
    return(
  Team.map((data)=>{
    return (
        <>
        <Card className='team'>
          <Card.Img variant="top"  style={{width:"200px", height:"200px"}} src={data[0]}/>
          <Card.Body>
            <Card.Title  style={{fontWeight:"bold"}}>{data[1]}</Card.Title>
            <Card.Text style={{fontSize:"10px"}}>
            {data[2]}
            </Card.Text>
            <p style={{fontSize:"10px"}}>                
             <FaTwitter/>  <FaInstagram/>  <FaLinkedin/>
            </p>
          </Card.Body>
        </Card>
        </>
      );
 }));
  
}

export default Teamcart;