import uuidv1 from 'uuid/v1';

export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: uuidv1(),
    text
  }
}