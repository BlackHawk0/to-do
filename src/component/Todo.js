import React from 'react'
import '../App.css'

function Todo({todo}) {    
    return (
        <div className={todo.completed ? "strike" : " "}>
        <div className= 'wrap'>
        <div className='todo2'>
            <li className='list-item'>{todo.title} </li>
            
        </div>
        <div className="todo1">
            <button className='button-complete'>
                <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit'>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete'>
                <i className='fa fa-trash'></i>
            </button> 
        </div>
        </div>
           
        </div>
    )
}

export default Todo