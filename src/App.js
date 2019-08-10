import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodosList'
import sha256  from 'sha-256-js'
import './App.css';

class App extends Component {
  state = { 
    //List of todoItems objects
    todoItems: [],
  }

  //function invoked after click of Add button to add and show a new todo
  showAddedTodoItem = (task, isImportant, isUrgent, date) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.concat({
        task,
        isImportant,
        isUrgent,
        isDone: false,
        date, 
        id: sha256(new Date().toString()) //hashing of the time to get unique id.
      })
    }))
  } 
  render() {
    return (
      <div className="App">
        <TodoInput addTodoItem={this.showAddedTodoItem} />
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
