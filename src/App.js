import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import ContactUs from './components/ContactUs/ContactUs';




class App extends Component {
  render() {
    return (
        <div className="App">
          <Home />
          <About />
          <Team />
          <ContactUs />
        </div> 
    )
  }
}

export default App;
