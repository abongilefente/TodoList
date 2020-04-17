import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Todo from "./components/Todo";
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


class App extends Component {
  state={
    list:[
      {
        id: 1,
      title: "Add Kuhle",
      completed: false
      },

      {
        id: 2,
      title: "Add Nosipho1  ",
      completed: false
      },

      {
        id: 3,
      title: "Add Luvuyo",
      completed: false
      },
      {
        id: 4,
      title: "Add Luvuyo",
      completed: false
      },
      {
        id: 5,
      title: "Add Luvuyo",
      completed: false
      }
    ]
  }
  //Change coplete
  markComplete = (id) =>{
    this.setState({list: this.state.list.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //delete item
  daleteTodo = (id) =>{
    this.setState({ list: [...this.state.list.filter(todo => todo.id!==id)]});
  }

  AddTodo = (title) => {
    const newItem ={
      id:4,
      title,
      completed:false
    }
    this.setState({list: [...this.list, newItem]})
    
  }
  render (){
    
    return(
      <Router>
        <div className='App'>  
        <Header/> 
          <Route path='/' exact render={props =>(
            
            <React.Fragment> 
              <AddTodo AddTodo={this.AddTodo}/>      
              <Todo todos={this.state.list} markComplete ={this.markComplete} daleteTodo={this.daleteTodo}/>
            
            </React.Fragment>
          
            
          )}/>
          <Route path='/About' component={About}></Route>
          
        </div>
      </Router>
    );
  }
}
export default App;
