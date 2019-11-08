import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


function Header() {
    return (
        <div className="header-wrapper">
           <h2><span>R</span>POD</h2>
        <div className="header-navlinks">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>
        </div>
        </div>
    )
}
export default Header;