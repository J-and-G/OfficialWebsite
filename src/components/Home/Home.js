import React, {Component} from 'react';
import './home.css';

import Nav from "../Nav/Nav";
import Header from "../Header/Header";





class Home extends Component {
    state = {
        nav: false
    }

    onHamClick = () => {
        this.setState(prev => ({nav:!prev.nav}))
    }

    render() {

        return (
            <div className="home-page">
                <div className="loading-page">
                    <div className="counter">
                        <h1>LOADING</h1>
                        <p>0%</p>
                        <hr/>
                    </div>
                </div>
                <section id="home" className="home-particles">

                    <div className="inner-home">
                        <Header clicked={this.onHamClick}/>

                        <div className="center-title">
                            <h1>ideate.</h1>
                            <h1>create.</h1>
                            <h1>iterate.</h1>
                        </div>

                        <div className="scroll-icon">
                        </div>
                    </div>

                </section>
                <Nav on={this.state.nav}/>

            </div>

        );
    }
}

export default Home;
