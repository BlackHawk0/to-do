import React from 'react'

const TodoLists = ({todos , setTodos, setEditTodo}) => {
   
    function handleComplete({id}){
        setTodos(
            todos.map((item)=>{
                if (item.id===todos.id){
                    return {...item,completed: !item.completed}
                }
                return item;
            })
        )
    }
    function handleDelete(task){
        setTodos(todos.filter((todo)=>todo !==task));
    }

    function handleEdit(task){
        const findTodo=todos.find((todo)=>todo===task);
        setEditTodo(findTodo);

    }
  return (
    <div>
        {todos.map((todo,index)=>
        (
            <li className='list-item' key={index}>
                <input type ="text" value={todo.title} className={'list $ {todo.completed ? "completed" : ""}'}  onChange={(event)=>event.preventDefault} />
                <button className='button-complete task-button' onClick={()=>handleComplete(todos)}>
                    <i className='fa fa-check-circle'></i>
                </button>
                <button className='button-edit task-button' onClick={()=>handleEdit(todos)} >
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button'  onClick={()=>handleDelete(todo)}>
                    <i className='fa fa-trash'></i>
                </button>
            </li>
        )        
        )}
    </div>
  )
}

export default TodoLists