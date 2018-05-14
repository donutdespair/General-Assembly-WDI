import React from 'react';

const End = (props) =>{
  const style = props.ending.code === "red" ? "lose" : "win"
  //if code is red, it gets a class of lose
  return (
    <p className={style}>{ props.ending.text}</p>
    );
}

export default End;
