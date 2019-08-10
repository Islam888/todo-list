import React, { Component } from 'react';

class TodoInput extends Component {
    state = {  }
    handleClick = (e) => {
        e.preventDefault()
        const inputItemValue = document.getElementById('todoInput').value;
        const importantCheckValue = document.getElementById('important').checked;
        const urgentCheckValue = document.getElementById('urgent').checked;
        return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue)
    } 

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            const inputItemValue = e.target.value;
            const importantCheckValue = document.getElementById('important').checked;
            const urgentCheckValue = document.getElementById('urgent').checked;
            return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue)
        }
    }
    render() { 
        return ( 
            <div>   
                <input type="text" id="todoInput" onKeyDown={this.handleKeyDown} placeholder="Add todo" required />
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