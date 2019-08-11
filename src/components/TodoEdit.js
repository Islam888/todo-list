import React, { Component } from 'react';

class TodoEdit extends Component {
    state = {  }

    handleClick = (e) => {
        e.preventDefault()
        const inputItemValue = document.getElementById('todoEdit').value;
        if (!inputItemValue) {
            return;
        } else {
            document.getElementById('todoEdit').value = "" //empty the text field
            const importantCheckValue = document.getElementById('important-edit').checked;
            const urgentCheckValue = document.getElementById('urgent-edit').checked;
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue, date)
        }
    } 

    handleKeyDown = (e) => {
        const inputItemValue = e.target.value;
        if (e.keyCode === 13 && inputItemValue) {
            e.target.value = "" //empty the text field
            const importantCheckValue = document.getElementById('important-edit').checked;
            const urgentCheckValue = document.getElementById('urgent-edit').checked;
            const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            return this.props.addTodoItem(inputItemValue, importantCheckValue, urgentCheckValue, date)
        } else {
            return;
        }
    }

    render() { 
        return ( 
            <div>
                <div>   
                <input type="text" id="todoEdit" onKeyDown={this.handleKeyDown} placeholder="Edit todo" />
                <button id="edit-button" onClick={this.handleClick}>Add</button>
                <input type="checkbox" id="important-edit" name="priority" />
                <label htmlFor="important-edit" >important</label>
                <input type="checkbox" id="urgent-edit" name="priority" />
                <label htmlFor="urgent-edit" >urgent</label>
            </div>
            </div>
         );
    }
}
 
export default TodoEdit;