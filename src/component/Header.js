import React from 'react';
import{ NavLink }from'react-router-dom';
import Image  from 'react-bootstrap/Image';
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Header(){
return(
     <div className='c1'>
      <Image src="asset/logo.png" width={75} style={{marginTop: "-50px"}}/>
    <h3>Econfiy</h3>
    <input></input>
    <button>search</button>
    <ul>
        <li className='icon'><CgProfile/></li>
       <NavLink to="/Profile" style={{textDecorationLine:"none"}}><li>profile</li></NavLink> 
    </ul>
    <ul >
        <li className='icon'><IoSettingsSharp/></li>
        <NavLink to="/Setting"  style={{textDecorationLine:"none"}}><li>setting</li></NavLink>
    </ul>
    <ul>
        <li className='icon'><FaHeart/></li>
        <NavLink to='/Favorites' style={{textDecorationLine:"none"}}><li>favorites</li></NavLink>
    </ul>      
    </div>
    
    
)
}
export default Header;
