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
                <Header clicked={this.onHamClick}/>
                <section id="home" className="home-particles">
                    <div className="inner-home">


                        <div className="center-title">
                            <h1>ideate.</h1>
                            <h1>create.</h1>
                            <h1>iterate.</h1>
                        </div>

                        <div class="top-text">
                            <a href="#info">Scroll for more info</a>
                        </div>
			   	        <div class="scroll-icon">
                            <a href="#info" class="smoothscroll">
                                <div class="mouse"></div>
                            </a>
                            <div class="end-top"></div>
                        </div>
                    </div>

                </section>

                <Nav on={this.state.nav}/>
            </div>

        );
    }
  

}

export default Home;
