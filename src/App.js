import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodosList";
import sha256 from "sha-256-js";
import "./App.css";

class App extends Component {
  state = {
    //List of todoItems objects
    todoItems: []
  };

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
    }));
  };

  //remove todo item by filtering out the item which has an id equal to the id of the item with clicked remove button
  removeTodoItem = id => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(item => item.id !== id)
    }));
  };

  //Change the editMode value to true of the item with id of the item edit button clicked
  editTodoItem = id => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.id === id) {
          item.editMode = true;
          return item;
        } else {
          return item;
        }
      })
    }));
  };

  //edit the selected item with the new values
  showEditedTodoItem = (task, isImportant, isUrgent, date) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.editMode) {
          item.task = task;
          item.isImportant = isImportant;
          item.isUrgent = isUrgent;
          item.date = date;
          item.editMode = false; //return back editMode value to false to swipe the TodoEdit component with the TodoItem one.
          return item;
        } else {
          return item;
        }
      })
    }));
  };

  // To mark an item as done. The function switches isDone to true
  markDone = id => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.id === id) {
          item.isDone = true;
          return item;
        } else {
          return item;
        }
      })
    }));
  };

  render() {
    const { todoItems } = this.state;

    return (
      <div className="App">
        <TodoInput addTodoItem={this.showAddedTodoItem} />
        <TodoList
          todoItems={todoItems}
          removeTodoItem={this.removeTodoItem}
          editTodoItem={this.editTodoItem}
          addEditedTodoItem={this.showEditedTodoItem}
          markDone={this.markDone}
        />
      </div>
    );
  }
}

export default App;
