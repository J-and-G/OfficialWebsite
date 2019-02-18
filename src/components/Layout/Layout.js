import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Team from "../Team/Team";
import Contact from "../ContactUs/ContactUs";
import {Route} from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import $ from 'jquery';

class Layout extends Component {
    state = {
        nav: false,
        component: 0
    }

    onHamClick = () => {
        this.setState(prev => ({nav: !prev.nav}))
        if ($("header").hasClass("dark")) {
            $("header").toggleClass("dark");
        }

    }
    navOff = () => {
        this.setState(prev => ({nav: false}))
    }

    handleScrollDown = () => {
        console.log("scroll up");
        this.setState(prev => ({component: ((prev.component+1)%4)}))
    }
    handleScrollUp = () => {
        console.log("scroll down");
        this.setState(prev => ({component: ((prev.component-1)%4)}))
    }

    render() {

        return (
            <ReactScrollWheelHandler
                // pauseListeners = {this.state.component==2}
                upHandler={() => this.handleScrollUp()}
                downHandler={() => this.handleScrollDown()}>
                <div className="layout">

                    <Header navOff={this.navOff} ham={this.state.nav} clicked={this.onHamClick}/>
                    {/*<Route render={({location}) => (*/}
                        {/*<TransitionGroup>*/}
                            {/*<CSSTransition*/}
                                {/*key={location.key}*/}
                                {/*timeout={300}*/}
                                {/*classNames="fade">*/}
                                {/*<Switch location={location}>*/}
                                    {/*<Route exact path='/about' component={About}/>*/}
                                    {/*<Route exact path='/team' component={Team}/>*/}
                                    {/*<Route exact path='/contact' component={Contact}/>*/}

                                    {/*<Route path='/' component={Home}/>*/}
                                {/*</Switch>*/}
                            {/*</CSSTransition>*/}
                        {/*</TransitionGroup>*/}
                    {/*)}>*/}


                    {/*</Route>*/}

                    {(this.state.component==0) && <Route render={() => (
                        <Home/>
                    )}></Route>}

                    {(this.state.component==1) && <Route render={() => (
                        <About/>
                    )}></Route>}

                    {(this.state.component==2) && <Route render={() => (
                        <Team/>
                    )}></Route>}

                    {(this.state.component==3) && <Route render={() => (
                        <Contact/>
                    )}></Route>}



                    <Nav on={this.state.nav} clicked={this.onHamClick}/>
                </div>

            </ReactScrollWheelHandler>


        );
    }


}

export default Layout;
