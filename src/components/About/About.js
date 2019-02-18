import React, {Component} from 'react';
import './about.css';
import video from "../../assets/video520.mp4";
import poster from "../../assets/poster.png"
import $ from "jquery";

class About extends Component {


    loadVideo = (e) => {
        console.log(window.innerWidth);
        let vid = document.getElementById("about-bg-video");
        if(window.innerWidth < 1025){
            while(vid.firstChild){
                vid.removeChild(vid.firstChild)
            }
            vid.style.height="100%";
        }
        if(window.innerWidth >=1025){
            let source1 = document.createElement('source');
            source1.setAttribute('src', video);
            source1.setAttribute('type', 'video/mp4');
            vid.appendChild(source1);
            vid.play();
        }
    }

    componentDidMount() {
        setTimeout(()=>{$(".backup-overlay").addClass("hide-overlay")},100)

        // this.loadVideo();
        // window.onresize = this.loadVideo;
        // $(".backup-overlay").addClass("hide-overlay");
    }

    render() {
        return (

            <div className="first-page">
                <div className="backup-overlay"></div>
                <div className="videoContainer">
                    <div className="overlay">
                        <h1 className="intro">
                            We are a software solution agency based in the city of Hong Kong.
                            We devote ourselves towards realising your ideas by listening, asking, researching, thinking
                            and dissecting before recreating your powerful ideas in the form of impactful softwares that
                            help your
                            brand narrate its unique ideas and reach out millions.
                        </h1>

                        <p className="services-provided"> Mobile Solutions / Web Solutions / Cloud Solutions/ In-House
                            Softwares/ And anything yet to be discovered </p>
                        <p className="team">
                            Our team
                        </p>
                        <div id="vr">&nbsp;</div>
                    </div>
                    <video id="about-bg-video" poster={poster} autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>

        );
    }
}

export default About;
