import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodosList'
import './App.css';

class App extends Component {
  state = { 
    //List of todoItems objects
    todoItems: [],
  }

  //function invoked after click of Add button to add and show a new todo
  showAddedTodoItem = (todoItem, isImportant, isUrgent) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.concat({
        todoItem,
          isImportant,
          isUrgent,
          isDone: false,
      })
    }))
  } 
  render() {
    return (
      <div className="App">
        <TodoInput addTodoItem={this.showAddedTodoItem} />
        <TodoList TodoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
