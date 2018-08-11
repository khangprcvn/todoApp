import React from 'react';
import Filterlink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions/index';
function Footer() {
  return (
    <div>
      <Filterlink filter={VisibilityFilters.SHOW_ALL}>All</Filterlink>
      <Filterlink filter={VisibilityFilters.SHOW_ACTIVE}>Active</Filterlink>
      <Filterlink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Filterlink>
    </div>
  );
}
export default Footer;