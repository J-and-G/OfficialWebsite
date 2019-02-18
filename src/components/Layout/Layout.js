import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Team from "../Team/Team";
import Contact from "../ContactUs/ContactUs";
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import SwipeableRoutes from "react-swipeable-routes";
import $ from 'jquery';

class Layout extends Component {
    state = {
        nav: false,
    }
    
    componentWillMount(){

        const script1 = document.createElement("script");
        script1.src = "/javascripts/plugins.js";
        document.body.appendChild(script1);

    }
    
    onHamClick = () => {
        this.setState(prev => ({nav: !prev.nav}))
        if($("header").hasClass("dark")){
            $("header").toggleClass("dark");
        }

    }
    navOff = () => {
        this.setState(prev => ({nav: false}))
    }

    render() {

        return (
            <div className="layout">
                <Header navOff={this.navOff} ham={this.state.nav} clicked={this.onHamClick}/>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade">
                            <Switch location={location}>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/team' component={Team}/>
                                <Route exact path='/contact' component={Contact}/>

                                <Route path='/' component={Home}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}>
                
                
                </Route>

                 <SwipeableRoutes enableMouseEvents>
    <Route exact component={Home} path="/" />
    <Route exact component={About} path="/about" />
    <Route component={Team} path="/team" />
    <Route component={Contact} path="/contact" />
 </SwipeableRoutes>
                <Nav on={this.state.nav} clicked={this.onHamClick} />
            </div>


        );
    }


}

export default Layout;
