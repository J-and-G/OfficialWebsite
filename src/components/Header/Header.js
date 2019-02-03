import Hamburger from "../Hamburger/Hamburger";
import React from "react";
import './header.css';
import {Link, withRouter} from 'react-router-dom';

const Header = ({clicked, ham, navOff}) => (
    <header>
        <Link onClick={navOff} className="link-home" to='/home'>
        <div className="logo">
            <span><a href="#" id="jg">JG</a></span><span><a id="labs" href="#">Labs</a></span>
        </div>
        </Link>
        <Hamburger ham={ham} clicked={clicked}/>
    </header>
);
export default withRouter(Header);