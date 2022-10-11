import React, {useState} from 'react'
import '../App.css'

function Todo({todo, del}) { 

    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)

    function handleComplete(){
        todo.completed = !todo.completed
    }
    function handleEdit(){
        setIsEditing(true)
    }

    function handleChange(e){
        setNewTitle(e.target.value)
    }

    function handleUpdate(e){
        e.preventDefault()
        todo.title = newTitle
        setIsEditing(false)
    }

    function handleDelete(){
        del(todo.id)
    }

    if(isEditing){
        return(
            <div className='wrap'>
                <form className='todo-edit-form' onSubmit={handleUpdate}>
                    <input type='text' value={newTitle} onChange={handleChange}/>
                    <button>Save</button>
                </form>
            </div>
        )
    }

    return (
        <div className={todo.completed ? "strike" : " "}>
        <div className= 'wrap'>
        <div className='todo2'>
            <li className='list-item'>{todo.title} </li>
            
        </div>
        <div className="todo1">
            <button className='button-complete' onClick={handleComplete}>
                <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit' onClick={handleEdit}>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete' onClick={handleDelete}>
                <i className='fa fa-trash'></i>
            </button> 
        </div>
        </div>
           
        </div>
    )
}

export default Todo