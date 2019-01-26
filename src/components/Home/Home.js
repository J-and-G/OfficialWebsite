import React, { Component } from 'react';
import './home.css';


class Home extends Component {
 
  render() {
    return (
        <div>   
            <div className="loading-page">
                <div className="counter">
                    <h1>LOADING</h1>
                    <p>0%</p>
                    <hr/>
                </div>
            </div>
            <section id="home" className="home-particles">

                <header>
                    <div className="logo">
                    </div>
                </header>
                <div className="center-title">
                    <h1>ideate.</h1>
                    <h1>create.</h1>
                    <h1>iterate.</h1>
                </div>

                <div className="scroll-icon">
                </div>
            </section>
        </div>
        
    );
  }
}

export default Home;
