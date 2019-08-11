import React from 'react';
import TodoItem from './TodoItem';
import TodoEdit from './TodoEdit'

const TodoList = (props) => {
    return ( 
        <div>
            <ul>
                {
                    props.todoItems.map(item => (
                        <li>
                            {
                                item.editMode ? (<TodoEdit 
                                                    key={item.id}
                                                    addTodoItem={props.addEditedTodoItem}    
                                                    value={item.task}
                                                    important={item.isImportant}
                                                    urgent={item.isUrgent}
                                                />) : (
                                    <TodoItem  
                                        key={item.id} 
                                        id={item.id}
                                        item={item.task} 
                                        important={item.isImportant}
                                        urgent={item.isUrgent}
                                        done={item.isDone}
                                        removeTodoItem={props.removeTodoItem}
                                        editTodoItem={props.editTodoItem}
                                        editMode={item.editMode}
                                        markTodoItemDone={props.markDone}
                                    />
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default TodoList;