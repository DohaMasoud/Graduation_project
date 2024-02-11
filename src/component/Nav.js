import React from 'react';
import{ NavLink }from'react-router-dom';

import { IoIosArrowDown } from "react-icons/io";
import { FaListUl } from "react-icons/fa6";
function Nav(){
return(
    <div className='c2'>
    <ul>
        <NavLink  to="/Home" style={{textDecorationLine:"none"}}><li><FaListUl/> All Category</li></NavLink>
        <NavLink to="/Home" style={{textDecorationLine:"none"}}><li>Home</li></NavLink> 
        <NavLink to="/Home" style={{textDecorationLine:"none"}}><li>Product</li></NavLink> 
        <NavLink to="/History" style={{textDecorationLine:"none"}}><li>History</li></NavLink> 
        <NavLink  to="/Contact" style={{textDecorationLine:"none"}}><li>Help <IoIosArrowDown/></li></NavLink>
    </ul>
    </div>
    
    
)
}
export default Nav;
