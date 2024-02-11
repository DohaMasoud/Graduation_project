import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import{ NavLink }from'react-router-dom';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function SignIn() {

    const initalFormData = {
        email: "",
        password:"",
    };
    
    const [formData, setFormData] = useState({ ...initalFormData });
    const [err, setErr] = useState({
      email: null,
      password:null,
   });
   
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const changeHandler = (e) => {
      if(e.target.name === "email" && !emailRegex.test(e.target.value)) {
            setErr({
              ...err,
              [e.target.name]: `Valid Email :'name@email.com' `,
            });
        }else if (e.target.name === "password" && e.target.value.length <= 6) {
            setErr({
              ...err,
              [e.target.name]: `${e.target.name} must be more than 6 characters.`,
           });
        }
        else {
            setErr({...err,[e.target.name]: null,});
        }
        setFormData({...formData,[e.target.name]: e.target.value,});
        };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!err.email &&!err.password && emailRegex.test(formData.email) && formData.password.length > 6)
           {
              setFormData({...initalFormData, });
              alert("welcom my Dear ❤🌏")
            }else {
              alert("sorry enter valid data! Try Again 😃")
            }
}
  return (
    <>
    <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
    <Image src="asset/sign.jpeg" style={{width:"100%",height:"650px" ,borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}}/>
    <Form  onSubmit={submitHandler} style={{backgroundColor:"white" ,textAlign:"center"}}>
    <Image src="asset/sign2.jpg" style={{width:"200px"}}/>
    <h1 className='text-center mb-2 fs-2 '>Welcome Back</h1>
    <h4 className='text-center mb-2 fs-5'>Enter your login credentials to access your account.</h4>
      <Form.Group >
      <Form.Control
        type="text"
        id="input_email"
        name='email'
        className='border border-gray'
        placeholder="Enter email"
        onChange={changeHandler}
        value={formData.email}
        style={{margin:"1px auto", width:"45%"}}
      />
      <Form.Text className={err.email ? "text-danger mx-2" : "text-muted"}>
          {err.email? err.email: "Your email should contain'@'"}
      </Form.Text>

      </Form.Group>
      <Form.Group >
      <Form.Control
        type="password"
        id="inputPassword5"
        name="password"
        className='border border-gray'
        placeholder="Enter password"
        onChange={changeHandler}
        value={formData.password}
        style={{margin:"1px auto", width:"45%"}}
      />
      <Form.Text className={err.password ? "text-danger mx-2" : "text-muted"}>
       {err.password? err.password:"strong password"}
      </Form.Text>
      </Form.Group>
      <Button className='w-25' style={{display:'block',backgroundColor:"#0871FF", margin:"6px auto"}}type="submit">
        Sign In
      </Button>
      <p>or</p>
      <Button style={{backgroundColor:"white",color:"black",borderColor:"gray", padding:'2px',marginBottom:"5px"}}>
        <Image src="asset/google.png" style={{width:"30px"}}/>sign in with google
      </Button><br/>
      <Button style={{backgroundColor:"white",color:"black",borderColor:"gray",padding:"2px"}}>
        <Image src="asset/apple.png" style={{width:"25px"}}/>sign in with Apple
      </Button>
      <p>Don't Have An Account ?<NavLink to="/SignUp"><span style={{fontWeight:"bolder"}}>Sign Up</span></NavLink></p>
      </Form>
      </div>
    </>
  );
  }
export default SignIn;