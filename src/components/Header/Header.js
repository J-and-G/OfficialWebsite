import Logo from "../../assets/logo.png";
import Hamburger from "../Hamburger/Hamburger";
import React from "react";

const Header = ({clicked}) => (
    <header>
        <div className="logo">
            <img src={Logo} alt=""/>

        </div>
        <Hamburger clicked={clicked}/>
    </header>
);
export default Header;