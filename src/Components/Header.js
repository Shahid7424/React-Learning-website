import React from 'react'
import './App.css';
import { useState } from 'react'

const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login ");
    console.log("Header render");

  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='logo' alt='logo-img' />

            </div> 
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li> Service</li>
                    <li>Contact US</li>
               
                <button className='login' onClick={ () => {
                    btnNameReact === "Logout" ? setBtnNameReact("Logout ") : setBtnNameReact("Login"); 
                }}
                >
                    {btnNameReact}
                </button>
                </ul>
            </div>

    </div>
  )
}

export default Header