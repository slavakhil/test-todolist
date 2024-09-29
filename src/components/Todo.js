import React, { useState } from 'react'
// props.editTodo(props.todo.id, editValue)
export function Todo(props) {
    const [editValue, setEditValue] = useState(props.todo.title);
    const [isEditing, setIsEditing] = useState(false);

    const onHandleEdit =  () => {
        props.editTodo(props.todo.id, editValue);
        setIsEditing(false);
    }

    return(
        <div>
            <input value={props.todo.isComplete} type='checkbox' onChange={() => props.toggleTodo(props.todo.id)} />
            {
                isEditing ? <span>
                    <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    <button onClick={onHandleEdit}>Готово</button>
                </span> : <span>
                    <span>{props.todo.isComplete ? "ГОТОВО " : ''}{props.todo.title}</span>
                    <button onClick={() => setIsEditing(true)}>Ред</button>
                </span>
            }
            <button onClick={() => props.removeTodo(props.todo.id)}>x</button>
        </div>
    )
}