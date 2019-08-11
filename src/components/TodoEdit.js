import React from "react";

const TodoEdit = props => {
  const { value } = props;
  const handleClick = e => {
    e.preventDefault();
    const inputItemValue = document.getElementById("todoEdit").value;
    if (!inputItemValue) {
      return;
    } else {
      document.getElementById("todoEdit").value = ""; //empty the text field
      const importantCheckValue = document.getElementById("important-edit")
        .checked;
      const urgentCheckValue = document.getElementById("urgent-edit").checked;
      const date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      return props.addTodoItem(
        inputItemValue,
        importantCheckValue,
        urgentCheckValue,
        date
      );
    }
  };

  const handleKeyDown = e => {
    const inputItemValue = e.target.value;
    if (e.keyCode === 13 && inputItemValue) {
      e.target.value = ""; //empty the text field
      const importantCheckValue = document.getElementById("important-edit")
        .checked;
      const urgentCheckValue = document.getElementById("urgent-edit").checked;
      const date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      return props.addTodoItem(
        inputItemValue,
        importantCheckValue,
        urgentCheckValue,
        date
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="todoEdit"
          onKeyDown={handleKeyDown}
          placeholder="Edit todo"
          defaultValue={value}
        />
        <button id="edit-button" onClick={handleClick}>
          Add
        </button>
        <input
          type="checkbox"
          id="important-edit"
          name="priority"
          defaultChecked={props.important}
        />
        <label htmlFor="important-edit">important</label>
        <input
          type="checkbox"
          id="urgent-edit"
          name="priority"
          defaultChecked={props.urgent}
        />
        <label htmlFor="urgent-edit">urgent</label>
      </div>
    </div>
  );
};

export default TodoEdit;
