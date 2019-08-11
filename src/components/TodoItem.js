import React from "react";

const TodoItem = props => {
  const { id, item, removeTodoItem, editTodoItem, markTodoItemDone } = props;

  const handleRemoveBtnClick = () => removeTodoItem(id);

  const handleEditBtnClick = () => editTodoItem(id);

  const handleDoneBtnClick = () => markTodoItemDone(id);

  return (
    <div>
      <div>
        <button onClick={handleEditBtnClick}>edit</button>
        <button onClick={handleRemoveBtnClick}>remove</button>
        <button onClick={handleDoneBtnClick}>done</button>
      </div>
      <div>
        <p>{item}</p>
      </div>
    </div>
  );
};

export default TodoItem;
