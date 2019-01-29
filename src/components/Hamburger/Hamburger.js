import React from 'react';
import './hamburger.css';

class Hamburger extends React.Component {
    state = {
        ham: false
    }

    onHamClick = () => {
        this.setState(prev => ({ham:!prev.ham}))
        this.props.clicked();
    }

    render(){
        return(
            <div onClick={this.onHamClick} className = {["hamburger-icon", this.state.ham ? "hamburger-icon-open":null].join(" ")} >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
        )
    }
}

export default Hamburger;