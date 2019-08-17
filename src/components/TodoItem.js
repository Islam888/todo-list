import React from "react";
import edit from "../img/edit.svg" 
import remove from "../img/remove.svg" 

const TodoItem = props => {
  const { itemId, item, removeTodoItem, editTodoItem, markTodoItemDone } = props;

  const handleRemoveBtnClick = () => removeTodoItem(itemId);

  const handleEditBtnClick = () => editTodoItem(itemId);

  const handleDoneCheckboxClick = (e) => {
    return markTodoItemDone(e.target.checked, itemId)
  };
  

  return (
    <div>

      <div className="todo-item">
        <div className="done-checkbox-wrapper">
          <label className="control control-checkbox">
            <input
              type="checkbox"
              id="done"
              name="priority"
              onChange={handleDoneCheckboxClick}
            />
            <div className="control_indicator rounded-checkbox" />
          </label>
        </div>
        <div className="task-text-wrapper">
          <p className="task-text" id={`task-text-${itemId}`}>{item}</p>
        </div>
        <div className="edit-remove-btn-wrapper">
          <button className="remove-button" onClick={handleRemoveBtnClick}><img src={remove}  alt="remove" /></button>
          <button className="edit-button" onClick={handleEditBtnClick}><img src={edit} alt="edit" /></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
