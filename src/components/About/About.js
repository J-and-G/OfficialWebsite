import React, { Component } from 'react';
import Header from "../Header/Header";
import './about.css';
import video from "../../assets/video.mp4";


class About extends Component {
 
  render() {
    return (
        <div class="first-page">
           <div className="videoContainer">
              <div className="overlay">
                <Header />
                <h1 className="intro">
                  We are a software solution agency based in the city of Hong Kong.
                  We devote ourselves towards realising your ideas by listening, asking, researching, thinking 
                  and dissecting before we recreate powerful ideas in the form of impactful softwares that help your 
                  brand narrate its unique ideas and reach out millions.
                </h1> 
                <p className="top-text">
                  Our team
                </p>
                <div id="vr">&nbsp;</div>
              </div>
              <video autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
            
        </div>
        
    );
  }
}

export default About;
