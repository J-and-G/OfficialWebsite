import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';



const Nav = ({on, aboutClicked, teamClicked, contactClicked, clicked}) => (
    <div className={["navbar", on?"navbar-activated":null ].join(" ")}>
        <ul>
            <li><Link onClick={()=>{aboutClicked()}} to='/about'>About</Link></li>
            <li><Link onClick={()=>{teamClicked()}} to='/team'>Team</Link></li>
            <li><Link onClick={()=>{contactClicked()}} to='/contact'>Contact</Link></li>
        </ul>
    </div>
);

export default Nav;