import React, { Component } from 'react';
import './tempMain.css';


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
                Testing deployment
            </section>
        </div>
        
    );
  }
}

export default Home;