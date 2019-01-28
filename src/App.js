import React, { Component } from 'react';
import './main.css';
import Home from './components/Home/Home';
import About from './components/About/About';



class App extends Component {
  render() {
    return (
        <div>
          <Home />
          <About />
        </div> 
    )
  }
}

export default App;
