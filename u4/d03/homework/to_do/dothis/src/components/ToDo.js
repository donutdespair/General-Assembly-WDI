import React from 'react';

const ToDo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={() =>
      {remove(todo.id)}}>
      {todo.text}</li>);
}
export default ToDo;
