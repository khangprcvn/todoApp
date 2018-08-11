import React from 'react';
import Todo from './Todo';

function Todolist(props) {
  return (
    <ul className="list-group">
      {props.todos.map(todo => 
        <Todo
          key = {todo.id}
          {...todo}
          onClick = {() => props.toggleTodo(todo.id)} 
          />
      )}
    </ul>
  )
}

export default Todolist;