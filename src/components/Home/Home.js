import React, {Component} from 'react';
import './home.css';
import Preloader from "../Preloader/Preloader";


class Home extends Component {
    componentDidMount(){
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");

        script1.src = "/javascripts/plugins.js";
        script2.src = "/javascripts/index.js";

        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }

    render() {

        return (
                <div className="home-page">

                    <Preloader/>

                    <section id="home" className="home-particles">
                        <div className="inner-home">


                            <div className="center-title">
                                <h1>ideate.</h1>
                                <h1>create.</h1>
                                <h1>iterate.</h1>
                            </div>

                            <div className="top-text">
                                <a href="#info">Scroll for more info</a>
                            </div>
                            <div className="scroll-icon">
                                <a href="#info" className="smoothscroll">
                                    <div className="mouse"></div>
                                </a>
                                <div className="end-top"></div>
                            </div>
                        </div>

                    </section>
                </div>



        );
    }
  

}

export default Home;
