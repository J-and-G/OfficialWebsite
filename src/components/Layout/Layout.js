import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Team from "../Team/Team";
import Contact from "../ContactUs/ContactUs";
import {Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class Layout extends Component {
    state = {
        nav: false,
    }

    onHamClick = () => {
        this.setState(prev => ({nav: !prev.nav}))
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
                )}/>
                <Nav on={this.state.nav} clicked={this.onHamClick} />
            </div>


        );
    }


}

export default Layout;