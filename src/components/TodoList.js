import React from 'react'
import { Todo } from './Todo'

export function TodoList(props) {
    return(
        <div>
            {
                props.todos.map((todo) => 
                    <Todo 
                        todo={todo} 
                        removeTodo={props.removeTodo} 
                        editTodo={props.editTodo} 
                        toggleTodo={props.toggleTodo}
                    />)
            }
        </div>
    )
}