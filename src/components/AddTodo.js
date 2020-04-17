import React, { Component } from 'react'

export class AddTodo extends Component {
   state={
       title:''
   }
   //add new to do item
   onChange =(e) => this.setState({title: e.target.value});
   //functionality of the submit button
   onSubmit =(e) => {
       e.preventDefault();
       this.props.AddTodo(this.state.title);
       this.setState({title:'' });
   }
   
    render() {
        return (
            <div>
                <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='title'
                        style={{flex:'10'}}
                        value={this.state.title}
                        placeholder='Add to do Item'
                        onChange={this.onChange}
                    />
                    <input
                        type='button'
                        name='title'
                        value='submit'
                        //onClick={this.props.addTodoItem}
                        style={{flex:'1'}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
