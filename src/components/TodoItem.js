import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }

    handleRemoveBtnClick = () => this.props.removeTodoItem(this.props.id)

    handleEditBtnClick = () => this.props.editTodoItem(this.props.id)

    handleDoneBtnClick = () => this.props.markeTodoItemDone(this.props.id)

    render() { 
        return ( 
            <div>
                <div>
                    <button onClick={this.handleEditBtnClick}>edit</button>
                    <button onClick={this.handleRemoveBtnClick}>remove</button>
                    <button onClick={this.handleDoneBtnClick}>done</button>
                </div>
                <div>
                
                <p>{this.props.item}</p>
                </div>
            </div>
         );
    }
}
 
export default TodoItem;