import React, { Component } from 'react';
import AddToDo from '../containers/AddTodo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo />
      </div>
    );
  }
}

export default App;
