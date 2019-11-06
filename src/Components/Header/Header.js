import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className="header-wrapper">
           <h2><span>A</span>POD</h2>
        <div className="header-navlinks">
           <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/">About</a></li>
               <li><a href="/">Contact</a></li>
               <li><a href="/">Services</a></li>
           </ul>
        </div>
        </div>
    )
}
export default Header;