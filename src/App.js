import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';



class App extends Component {
  render() {
    return (
        <div className="App">
          <Home />
          <About />
          <Team />
        </div> 
    )
  }
}

export default App;
