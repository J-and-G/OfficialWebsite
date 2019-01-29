import React, { Component } from 'react';
import './contact.css';
import home from "../../assets/home.png";
import phone from "../../assets/phone.png";



class ContactUs extends Component {
 
  render() {
    return (
        <div class="contact-us">
            
            <div class="address-container">
                <div class="address">
                    <img src={home}></img>
                    <section>
                        <h4>Hong Kong</h4>
                        <p>Simon KY Lee Hall, HKU  <br/>Pokfulam Road</p>
                       
                    </section>
                </div>
            </div>
            <div class="phone-container">

                <div class="contact">
                    <img src={phone}></img>
                    <section>
                        <h4>Connect</h4>
                        <p>hello@jandg.tech <br/> +852-64346741</p>
                    </section>
                </div>
                
                    
            </div>
        </div>
        
    );
  }
}

export default ContactUs;
