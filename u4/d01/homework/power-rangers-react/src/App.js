import React, { Component } from 'react';
import './App.css';
import Ranger from './components/Ranger'
import Name from './components/Name'
import Image from './components/Image'
import About from './components/About'
import Clip from './components/Clip'




class App extends Component {
  render() {
    return (
      <div className="App">

        <Name />
        <Image />
        <About />

        <Clip />
      </div>
    );
  }
}

export default App;
