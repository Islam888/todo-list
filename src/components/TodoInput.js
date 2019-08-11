import React, { Component } from 'react';

class TodoInput extends Component {
    state = {  }
    handleClick = (e) => {
        e.preventDefault()
        const inputItemValue = document.getElementById('todoInput').value;
        if (!inputItemValue) {
            return;
        } else {
            document.getElementById('todoInput').value = "" //empty the text field
            const importantCheckValue = document.getElementById('important').checked;
            const urgentCheckValue = document.getElementById('urgent').checked;
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue, date)
        }
    } 

    handleKeyDown = (e) => {
        const inputItemValue = e.target.value;
        if (e.keyCode === 13 && inputItemValue) {
            e.target.value = "" //empty the text field
            const importantCheckValue = document.getElementById('important').checked;
            const urgentCheckValue = document.getElementById('urgent').checked;
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue, date)
        } else {
            return;
        }
    }


    render() { 
        return ( 
            <div>   
                <input type="text" id="todoInput" onKeyDown={this.handleKeyDown} placeholder="Add todo" />
                <button id="add-button" onClick={this.handleClick}>Add</button>
                <input type="checkbox" id="important" name="priority" />
                <label htmlFor="important" >important</label>
                <input type="checkbox" id="urgent" name="priority" />
                <label htmlFor="urgent" >urgent</label>
            </div>
         );
    }
}
 
export default TodoInput;