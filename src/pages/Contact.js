import Image from 'react-bootstrap/Image';
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
function Contact() {
  return (
    <>
   <Header/>
    <Nav/>
    <div style={{backgroundColor:"white",border:"1px solid #0871FF",padding:"30px",width:"75%", margin:"50px auto"}}>
        <h3 style={{color:"#0871FF", display:"flex", justifyContent:'center',fontSize:"30px"}}>Contact Us</h3>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <form >
            <input type='text' style={{border:"1px solid #0871FF", width:"200px",padding:"10px",borderRadius: "10px"}}placeholder='Name'></input><br/>
            <br/><input type='email' style={{border:"1px solid #0871FF", width:"300px",padding:"10px",borderRadius: "10px"}} placeholder='Email'></input><br/>
            <br/><textarea style={{border:"1px solid #0871FF", width:"400px",padding:"10px",borderRadius: "10px"}} placeholder='Message...'></textarea><br/>
        </form>
        <Image src="asset/4.jpeg" />
        </div>
        <button style={{backgroundColor:"#0871FF",color:"white",border:"1px solid #0871FF",padding:"10px",width:"100px",borderRadius: "10px" ,fontWeight:"bold",margin:"5px auto",display:"block"}}>Send</button>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;