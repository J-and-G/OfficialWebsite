import Logo from "../../assets/logo.png";
import Hamburger from "../Hamburger/Hamburger";
import React from "react";
import './header.css';

const Header = ({clicked}) => (
    <header>
        <div className="logo">
            <span><a href="#" id="jg">JG</a></span><span><a id="labs" href="#">Labs</a></span>
        </div>
        <Hamburger clicked={clicked}/>
    </header>
);
export default Header;