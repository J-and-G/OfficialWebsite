import React, { Component } from 'react';
import Header from "../Header/Header";
import './team.css';
import abhi from "../../assets/abhi.png";
import shikhar from "../../assets/shikhar.png";
import temp from "../../assets/temp.png";


class About extends Component {
 
  render() {
    return (
        <div class="team-list">
            <section id="member-1" class="team-member-container">
              <img src={abhi} class="image-poster" alt="developer" />
              <div class="text-container">
                <div class="text-details">
                  <h3>BackEnd Developer</h3>
                  <h1> Abhimanyue Singh Tanwar</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br /><br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </div>
            </section>

            <section id="member-2" class="team-member-container">
              <div class="text-container">
                <div class="text-details">
                  <h3>Application Devloper</h3>
                  <h1> Shikhar Khandelwal</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br /><br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </div>
              <img src={shikhar} class="image-poster" alt="developer" />
            </section>

            <section id="member-3" class="team-member-container">
              <img src={temp} class="image-poster" alt="developer" />
              <div class="text-container">
                <div class="text-details">
                  <h3>Temp Position</h3>
                  <h1> Need Woman</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br /><br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </div>
            </section>
            <section id="lets-talk">
              <h1><a href = "mailto: conveytoshikhar@gmail.com">Let's talk business</a></h1>
            </section>

        </div>
        
    );
  }
}

export default About;
