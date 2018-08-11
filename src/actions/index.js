
let nextId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextId++,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id 
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'VISIBILITY_FILTER',
    filter
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED' 
};