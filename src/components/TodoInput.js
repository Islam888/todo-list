import React from "react";

const TodoInput = props => {
  const handleClick = e => {
    e.preventDefault();
    const inputItemValue = document.getElementById("todoInput").value;
    if (!inputItemValue) {
      return;
    } else {
      const importantCheckValue = document.getElementById("important").checked;
      const urgentCheckValue = document.getElementById("urgent").checked;
      const date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      document.getElementById("todoInput").value = ""; //empty the text field
      document.getElementById("important").checked = false; //reset checkbox
      document.getElementById("urgent").checked = false; //reset checkbox
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
      const importantCheckValue = document.getElementById("important").checked;
      const urgentCheckValue = document.getElementById("urgent").checked;
      const date = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      e.target.value = ""; //empty the text field
      document.getElementById("important").checked = false; //reset checkbox
      document.getElementById("urgent").checked = false; //reset checkbox
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
      <input
        type="text"
        id="todoInput"
        onKeyDown={handleKeyDown}
        placeholder="Add todo"
      />
      <button id="add-button" onClick={handleClick}>
        Add
      </button>
      <input type="checkbox" id="important" name="priority" />
      <label htmlFor="important">important</label>
      <input type="checkbox" id="urgent" name="priority" />
      <label htmlFor="urgent">urgent</label>
    </div>
  );
};

export default TodoInput;
