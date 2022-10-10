import React from 'react'

function Todo({todo}) {
    console.log(todo);
    return (
        <div>
            {todo.title}
        </div>
    )
}

export default Todo
