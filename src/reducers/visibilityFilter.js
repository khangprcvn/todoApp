import {VisibilityFilters} from '../actions/index'; 

function VisibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case 'VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default VisibilityFilter;