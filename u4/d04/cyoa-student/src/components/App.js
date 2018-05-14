import React, { Component } from 'react';
import '../css/App.css';

import adventures from '../adventures';

import Choice from './Choice';
import End from './End';

class App extends Component {
  constructor(){
    super();
    this.state = {
      current_adventure: 0,
      //defaults to first adventure object
      adventures
    };
  }

  changeAdventure(to){
      this.setState({
        //makes a copy of current state
        current_adventure: to
        //changes copy to "to" (from adventures.js)
      });
  }

  resetGame(){
      this.changeAdventure(0)
   }
//this renders the came options beneath the adventure text
  showOptions(options){
    if (options){
      //checks to see if options exist, will throw an error without if there are not options available
      //will render buttons if there are options
      return options.map((option, i) =>{
        return (
          <Choice
          changeAdventure={ this.changeAdventure.bind(this) }
          //the changeAdventure function can be used here now that it is bound
          key={i}
          details={option}
          />
          )
         //the key is the index so it will be unique
      });
  } else {
    const { adventures, current_adventure } = this.state;
    const data = adventures[current_adventure];
    return(
    <End
    ending={data.ending} />
    );
  }
}
  render() {
    const { adventures, current_adventure } = this.state;
    //assigns state to adventures and current_adventure
    const data = adventures[current_adventure];
    //data is the current_adventure index of the adventures object
    const text = data.text.split("\n").map((el, i) => {
      //this takes in the data from text and splits in on the new line
      //the resulting array is mapped over and each one becomes a paragraph
      return (<p key={i}>{el}</p>)
      //you then return the key (elements require a key in react) and the element created
      //in the arrow function; the key, {i}, is the index of that element in the array
    })

    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav onClick={ () => {this.resetGame()} }>
          <h1>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
          { text /*gets text from adventures.js*/}
          <div className="choices">
          {this.showOptions(data.options)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
