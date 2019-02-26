import React, {Component} from 'react';
import './contact.css';
import home from "../../assets/home.png";
import phone from "../../assets/phone.png";
import $ from 'jquery';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


class Contact extends Component {


    state = {
        listening: true
    }

    componentDidMount() {
        $("header").addClass("dark");
        setTimeout(()=>{$(".backup-overlay").addClass("hide-overlay")},100)

        setTimeout(()=>{
            this.setState(prev => ({listening: false}));
        }, 500);
    }

    handleScrollUp = () => {
        this.props.history.push('/team');
    }

    handleScrollDown = () => {
        this.props.history.push('/');
    }

    render() {
        return (

            <ReactScrollWheelHandler
                upHandler={() => this.handleScrollUp()}
                downHandler={() => this.handleScrollDown()}
                pauseListeners = {this.state.listening}>

            <div>
                <div className="backup-overlay"></div>
                <section id="lets-talk">
                    <h1><a href="mailto: conveytoshikhar@gmail.com">Let's talk business</a></h1>
                </section>
                <div className="contact-us">


                    <div className="address-container">
                        <div className="address">
                            <img src={home}></img>
                            <section>
                                <h4>Hong Kong</h4>
                                <p>Simon KY Lee Hall, HKU <br/>Pokfulam Road</p>

                            </section>
                        </div>
                    </div>
                    <div className="phone-container">

                        <div className="contact">
                            <img src={phone}></img>
                            <section>
                                <h4>Connect</h4>
                                <p>hello@jandg.tech <br/> +852-64346741</p>
                            </section>
                        </div>


                    </div>
                </div>
            </div>

            </ReactScrollWheelHandler>


        );
    }
}

export default Contact;
