import React from 'react'
import logo from './../../Assets/logo.png'
import './Nav.css'

const Nav=()=> {
return (
    <div className="nav-container">
        <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo"/>
        <p className="flash-logo-text">TypeFast</p>
        </div>
    </div>
);
}

export default Nav;