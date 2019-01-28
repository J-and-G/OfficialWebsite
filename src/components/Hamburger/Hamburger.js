import React from 'react';
import './hamburger.css';

const Hamburger = ({clicked}) => (
    <div onClick={clicked} className="hamburger-icon">
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
    </div>
);

export default Hamburger;