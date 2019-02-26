import React, {Component} from 'react';
import './home.css';
import Preloader from "../Preloader/Preloader";

import {withRouter} from "react-router-dom";

import $ from "jquery";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

class Home extends Component {

    state = {
        preloader: true,
        listening: true
    }


    componentDidMount() {


        $("header").removeClass("dark");

        if (sessionStorage.getItem("p") !== "t") {
            const script1 = document.createElement("script");
            const script2 = document.createElement("script");

            script1.src = "/javascripts/plugins.js";
            script2.src = "/javascripts/index.js";

            document.body.appendChild(script1);
            document.body.appendChild(script2);

            sessionStorage.setItem("p", "t");
        } else {
            this.setState({preloader: false});

            const script2 = document.createElement("script");
            script2.src = "/javascripts/index-mod.js";
            document.body.appendChild(script2);

        }

        setTimeout(()=>{
            this.setState(prev => ({listening: false}));
        }, 500);


    }

    handleScrollUp = () => {
        this.props.history.push('/contact');
    }

    handleScrollDown = () => {
        this.props.history.push('/about');
    }

    render() {

        return (

            <ReactScrollWheelHandler
                upHandler={() => this.handleScrollUp()}
                downHandler={() => this.handleScrollDown()}
                pauseListeners = {this.state.listening}>


                <div className="home-page">


                    {this.state.preloader && <Preloader/>}
                    {!this.state.preloader && <div className="backup-overlay"></div>}


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

            </ReactScrollWheelHandler>


        );
    }


}

export default withRouter(Home);
