import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return ( 
        <div>
            <ul>
                {
                    props.todoItems.map(item => (<li>
                        <TodoItem  
                            key={item.id} 
                            item={item.task} 
                            important={item.isImportant}
                            urgent={item.isUrgent}
                            done={item.isDone}
                        />
                    </li>))
                }
            </ul>
        </div>
     );
}
 
export default TodoList;