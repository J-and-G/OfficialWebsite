import React, {Component} from 'react';
import './team.css';
import abhi from "../../assets/abhi.png";
import shikhar from "../../assets/shikhar.png";
import temp from "../../assets/temp.png";
import $ from 'jquery';


class About extends Component {
    componentDidMount() {
        $("header").removeClass("dark");
        $(".hamburger-icon").addClass("hamburger-icon-dark");
        $(document).scroll(function() {
            $(".slideanim").each(function(){
              var pos = $(this).offset().top;
          
              var winTop = $(window).scrollTop();
              if (pos < winTop + 600) {
                $(this).addClass("slide");
              }
            });
          });
        
    }

    render() {
        return (
            <div class="team-list">
                <section id="member-1" class="team-member-container slideanim">
                    <div className="image-poster"><img src={abhi} alt="developer"/></div>

                    <div class="text-container">
                        <div class="text-details">
                            <h3>BackEnd Developer</h3>
                            <h1> Abhimanyue Singh Tanwar</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book.
                                <br/><br/>It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </section>

                <section id="member-2" class="team-member-container slideanim">
                    <div class="text-container">
                        <div class="text-details">
                            <h3>Application Devloper</h3>
                            <h1> Shikhar Khandelwal</h1>
                            <p> Shikhar is our Application Developer. He has been developing applications for almost three years
                                and has never failed to provide a software that is commendable in all aspects. Focusing on optimising 
                                already created softwares, to creating efficient applications that benefit the society, Shikhar loves the 
                                development area of computer science. 
                                <br/><br/>On a less serious note, he loves playing basketball and listening to music. Guy is like a 'White Iverson'!</p>
                        </div>
                    </div>
                    <div className="image-poster"><img src={shikhar} alt="developer"/></div>
                </section>

                <section id="member-3" class="team-member-container slideanim">
                    <div className="image-poster"><img src={temp} alt="developer"/></div>
                    <div class="text-container">
                        <div class="text-details">
                            <h3>Business Analyst</h3>
                            <h1> Saksham Bhalotia</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book.
                                <br/><br/>It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </section>


            </div>

        );
    }
}

export default About;
