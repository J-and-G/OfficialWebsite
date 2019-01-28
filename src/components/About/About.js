import React, { Component } from 'react';
import Header from "../Header/Header";
import './about.css';


class About extends Component {
 
  render() {
    return (
        <div class="first-page">
          <Header />
            <h1 class="intro">
              We are a software solution agency based in the city of Hong Kong.
              We devote ourselves towards realising your ideas by listening, asking, researching, thinking 
              and dissecting before we recreate powerful ideas in the form of impactful softwares that help your 
              brand narrate its unique ideas and reach out millions.
            </h1> 
            <p class="services-offered">
              Web Apps / Mobile Apps/ In-House Softwares/ Backend Management Services / Software Transformation Services
            </p>
        </div>
        
    );
  }
}

export default About;
