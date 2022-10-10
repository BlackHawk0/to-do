import React from 'react'
import '../App.css'

function Todo({todo}) {    
    return (
        <div className={todo.completed ? "strike" : " "}>
            <p className='todo'>{todo.title} </p>
        </div>
    )
}

export default Todo

