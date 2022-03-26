import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="brand">
                    Book<span>App</span>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>services</li>
                       <li> <Link to="login"> <i className="fa-solid fa-circle-user"></i> Login</Link></li>
                       <li> <Link to="/"> <i className="fa-solid fa-user-plus"></i> Signup</Link></li>
                        {/* <!-- <li> <i className="fa-solid fa-cart-arrow-down"></i> cart </li> --> */}
                    </ul>
                </div>
                <div className="toogle">
                    <i className="fa-solid fa-bars"></i>
                </div>


            </nav>
        </>

    );
}

export default Navbar;
