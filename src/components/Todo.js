import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todo extends Component {
    
      render (){
        return (
          this.props.todos.map((todo) => 
          <TodoItems key= {todo.id} todo={todo} markComplete={this.props.markComplete}  daleteTodo={this.props.daleteTodo}  />) 
        ) ;
    }
  }
  Todo.propTypes ={
    todos: PropTypes.array.isRequired
  }
export default Todo;

