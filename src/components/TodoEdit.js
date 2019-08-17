import React from "react";
import sha256 from "sha-256-js";

const TodoEdit = props => {
  const { value, important, urgent, itemId, addTodoItem } = props;
  
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
      const id = itemId;
      return addTodoItem(
        inputItemValue,
        importantCheckValue,
        urgentCheckValue,
        date,
        id
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
      const id = sha256(new Date().toString())
      return props.addTodoItem(
        inputItemValue,
        importantCheckValue,
        urgentCheckValue,
        date,
        id
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="todo-input-wrapper">
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
        {/* <input
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
        <label htmlFor="urgent-edit">urgent</label> */}
        <div className="checkbox-wrapper">
        {/* <input type="checkbox" id="important" name="priority" />
        <label htmlFor="important">important</label> */}
        {/* <input type="checkbox" id="urgent" name="priority" />
        <label htmlFor="urgent">urgent</label> */}
        <label className="control control-checkbox" htmlFor="important-edit">
          important
          <input
            type="checkbox"
            id="important-edit"
            name="priority"
            defaultChecked={important}
          />
          <div className="control_indicator" />
        </label>
        <label className="control control-checkbox" htmlFor="urgent-edit">
          urgent
          <input
            type="checkbox"
            id="urgent-edit"
            name="priority"
            defaultChecked={urgent}
          />
          <div className="control_indicator" />
        </label>
      </div>
      </div>
    </div>
  );
};

export default TodoEdit;
