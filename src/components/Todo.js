import React from 'react';
const Todo = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none' 
      }} >
      {props.text}
    </li>
  )
}

export default Todo;