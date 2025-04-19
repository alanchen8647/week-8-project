import React from "react";
import {Outlet, Link} from "react-router";
import logo from '../img/logo.png'
function navbar(){
    return (
        <>
            <div className="navbar">
                <img src={logo} alt="logo" className="logo"/>
                <div className="nav">
                    <Link to='/'>Home</Link>
                    <Link to='/player'>Player</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default navbar;