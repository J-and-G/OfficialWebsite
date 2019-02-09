import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';



const Nav = ({on, clicked}) => (
    <div className={["navbar", on?"navbar-activated":null ].join(" ")}>
        <ul>
            <li><Link onClick={()=>{clicked()}} to='/about'>About</Link></li>
            <li><Link onClick={()=>{clicked()}} to='/team'>Team</Link></li>
            <li><Link onClick={()=>{clicked()}} to='/contact'>Contact</Link></li>
        </ul>
    </div>
);

export default Nav;