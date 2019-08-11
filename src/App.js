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
        id: sha256(new Date().toString()), //hashing of the time to get unique id.
        editMode: false
      })
    }))
  } 

  removeTodoItem = (id) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(item => item.id !== id)
    }))
  }

  editTodoItem = (id) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.id === id) {
          item.editMode = true;
          return item
        } else {
          return item
        }
      })
    }))
  }

  showEditedTodoItem = (task, isImportant, isUrgent, date) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.editMode) {
          item.task = task;
          item.isImportant = isImportant;
          item.isUrgent = isUrgent;
          item.date = date;
          item.editMode = false;
          return item
        } else {
          return item
        }
      })
    }))

  }

  render() {
    return (
      <div className="App">
        <TodoInput addTodoItem={this.showAddedTodoItem} />
        <TodoList 
          todoItems={this.state.todoItems} 
          removeTodoItem={this.removeTodoItem}
          editTodoItem={this.editTodoItem}
          addEditedTodoItem={this.showEditedTodoItem}
        />
      </div>
    );
  }
}

export default App;
