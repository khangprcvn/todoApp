import React, { Component } from 'react';
import AddToDo from '../containers/AddTodo';
import VisibleTodo from '../containers/VisibleTodo';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div>
        <AddToDo />
        <VisibleTodo />
        <Footer />
      </div>
    );
  }
}

export default App;
