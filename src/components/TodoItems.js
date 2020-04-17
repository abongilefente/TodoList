import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    addTodoItem() {
        console.log('addTodod')
    }
    getStyle = () => {
        return {
                textDecoration: this.props.todo.completed  ? 'line-through' : 'none',
                background: '#DCDCDC',
                padding: '10px',
                borderBottom: '1px white dotted'
            }        
    }
    
     render() {
        const {id,title}=this.props.todo;
       
        return (
            <div style= {this.getStyle()}> 
                <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button style={btnStyle} onClick={this.props.daleteTodo.bind(this,id)}> x </button>
                </p>
            </div>
        )
    }
}

const btnStyle ={
    background: 'red',
    color: 'white',
    border:'none',
    borderRadius:'5px 5px',
    padding:'5px 5px',
    float:'right'
}
TodoItems.propTypes ={
    todo: PropTypes.object.isRequired
  }
export default TodoItems
