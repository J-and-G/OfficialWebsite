import React, {Component} from 'react';
import './home.css';
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Team from "../Team/Team";
import ContactUs from "../ContactUs/ContactUs";
import SwipeableRoutes from "react-swipeable-routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import $ from "jquery";

class Home extends Component {

    state = {
        preloader: true
    }

    // componentWillMount(){

    //     const script1 = document.createElement("script");
    //     script1.src = "/javascripts/plugins.js";
    //     document.body.appendChild(script1);

    // }

    componentDidMount() {
        //document.addEventListener('scroll',this.handleScroll);
        // handleScroll = ()=>{
        //     this.props.history.push('/about')
        // }
        

        $("header").removeClass("dark");
        
        // $(document).scroll(function() {
        //     $(".slideanim").each(function(){
        //       var pos = $(this).offset().top;
          
        //       var winTop = $(window).scrollTop();
        //       if (pos < winTop + 600) {
        //         $(this).addClass("slide");
        //       }
        //     });
        //   });
        //setTimeout(() => {document.addEventListener('scroll',this.hadnleScroll)},3000);

        if (localStorage.getItem("p") !== "t") {
            const script1 = document.createElement("script");
            const script2 = document.createElement("script");

            script1.src = "/javascripts/plugins.js";
            script2.src = "/javascripts/index.js";

            document.body.appendChild(script1);
            document.body.appendChild(script2);

            localStorage.setItem("p", "t");
        }
        else {
            this.setState({preloader: false});

            // const script1 = document.createElement("script");
            // script1.src = "/javascripts/plugins.js";
            // document.body.appendChild(script1);

            const script2 = document.createElement("script");
            script2.src = "/javascripts/index-mod.js";
            document.body.appendChild(script2);

            // function script1(){
            //     return new Promise(function (fulfill, reject){
            //         //do stuff
            //         const script1 = document.createElement("script");
            // script1.src = "/javascripts/plugins.js";
            // document.body.appendChild(script1);
            //         // fulfill(result); //if the action succeeded
            //         // reject(error); //if the action did not succeed
            //     });
            // }

            // script1().then(function(){   const script2 = document.createElement("script");
            // script2.src = "/javascripts/index-mod.js";
            // document.body.appendChild(script2);})

            // $.when(function(){  const script1 = document.createElement("script");
            // script1.src = "/javascripts/plugins.js";
            // document.body.appendChild(script1);}).then(function(){   const script2 = document.createElement("script");
            // script2.src = "/javascripts/index-mod.js";
            // document.body.appendChild(script2);});
        }

        

    }

    // function1(){

    //     const script1 = document.createElement("script");
    //         script1.src = "/javascripts/plugins.js";
    //         document.body.appendChild(script1);

    // }

    // function2(){
    //     const script2 = document.createElement("script");
    //         script2.src = "/javascripts/index-mod.js";
    //         document.body.appendChild(script2);
    // }

    

    

    render() {

        return (
           
            
            <div className="home-page">

            <ReactScrollWheelHandler
            upHandler={() => console.log("scroll up")}
            downHandler={() => console.log("scroll down")}>
            </ReactScrollWheelHandler>

                 
       
         
      
      

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

                {/* <About></About> */}

              
             

            </div>


        );
    }


}

export default Home;
