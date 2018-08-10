import React, {Component} from 'react';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';
class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    if (this.state.value.length === 0) {
      event.preventDefault();
      return;    
    }
    this.props.dispatch(addTodo(this.state.value));
    event.preventDefault();
    this.setState({value: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleOnChange}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}


export default connect()(AddToDo);