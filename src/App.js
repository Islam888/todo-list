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
    const id = sha256(new Date().toString()) //hashing of the time to get unique id.
    this.setState(prevState => ({
      todoItems: [{
        task,
        isImportant,
        isUrgent,
        isDone: false,
        date,
        id, 
        editMode: false
      }].concat(prevState.todoItems)
    }));
    setTimeout(() => this.addBorderColor(isImportant, isUrgent, id), 0 )
  };



  addBorderColor = (isImportant, isUrgent, id) => {
    const listElem = document.getElementById(id)
    if (isImportant && isUrgent) {
      listElem.classList.remove('blue', 'orange', 'green', 'red')
      listElem.classList.add('red')
    } else if (isImportant) {
      listElem.classList.remove('blue', 'orange', 'green', 'red')
      listElem.classList.add('blue')
    } else if (isUrgent) {
      listElem.classList.remove('blue', 'orange', 'green', 'red')
      listElem.classList.add('orange')
    } else {
      listElem.classList.remove('blue', 'orange', 'green', 'red')
      listElem.classList.add('green')
    }
  }

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
  showEditedTodoItem = (task, isImportant, isUrgent, date, id) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        if (item.editMode) {
          item.task = task;
          item.isImportant = isImportant;
          item.isUrgent = isUrgent;
          item.date = date;
          item.editMode = false; //return back editMode value to false to swipe the TodoEdit component with the TodoItem one.
          item.id = id;
          return item;
        } else {
          return item;
        }
      })
    }));
    this.addBorderColor(isImportant, isUrgent, id)
  };

  // To mark an item as done. The function switches isDone to true
  markDone = (isChecked, id) => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.map(item => {
        /* if (item.id === id && isChecked) {
          item.isDone = true;
          const para = document.getElementById(`task-text-${id}`)
          const task = document.getElementById(`task-text-${id}`).textContent
          para.innerHTML = `<del>${task}</del>`
          return item;
        } else if  (item.id === id && !isChecked){
          item.isDone = false;
          const para = document.getElementById(`task-text-${id}`)
          const task = document.getElementById(`task-text-${id}`).textContent
          para.innerHTML = `${task}`
          return item;
        } else {
          return item;
        } */
        if (item.id === id) {
          if (isChecked) {
            item.isDone = true;
            const para = document.getElementById(`task-text-${id}`)
            const task = document.getElementById(`task-text-${id}`).textContent
            para.innerHTML = `<del>${task}</del>`
            return item;
          } else {
            item.isDone = false;
            const para = document.getElementById(`task-text-${id}`)
            const task = document.getElementById(`task-text-${id}`).textContent
            para.innerHTML = `${task}`
            return item;
          }
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
