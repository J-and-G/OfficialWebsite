import React from 'react';
import './hamburger.css';

class Hamburger extends React.Component {

    render(){
        return(
            <div onClick={this.props.clicked} className = {["hamburger-icon", this.props.ham ? "hamburger-icon-open":null].join(" ")} >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
        )
    }
}

export default Hamburger;