import React from 'react';
import './nav.css';
import Header from '../Header/Header';

const Nav = ({on}) => (
    <div className={["navbar", on?"navbar-activated":null ].join(" ")}>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>

    </div>
);

export default Nav;