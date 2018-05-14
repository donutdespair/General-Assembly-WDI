import React from 'react';

const Choice = (props) =>{
  const { label, to }  = props.details
  //js destructuring - sends "label" and "to" from options in adventures.js
  //assigns them to props.details
  return(
    <a className="button" onClick={() => {props.changeAdventure(to)} }>
  {/*onClick, pass the "to" into changeAdventure*/}
      {label}

    </a>
    );
}
  export default Choice;
