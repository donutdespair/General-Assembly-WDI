import React from 'react';
import ToDo from './ToDo';
const ToDoList = ({todos, remove}) => {

  const todoNode = todos.map((todo) => {
    return (<ToDo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}

export default ToDoList;
