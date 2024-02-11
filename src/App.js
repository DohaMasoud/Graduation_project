import './App.css';
import React from "react";
import History from'./pages/History.js';
import SignUp from'./pages/SignUp.js';
import SignIn from'./pages/SignIn.js';
import Contact from'./pages/Contact.js';
import Favorites from'./pages/Favorites.js';
import Profile from'./pages/profile.js';
import About from'./pages/About.js';
import Setting from'./pages/Setting.js';
import Home from'./pages/Home.js';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/History' element={<History/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Favorites' element={<Favorites/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
   </Routes>  
 
    </>
  );
}

export default App;
