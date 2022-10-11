import React from 'react'
import Todo from './Todo'


const TodoLists = ({todos, del, onUpdate}) => {

    return(
        <div>
           {todos.map((todo) => <Todo key={todo.id} todo={todo} del={del} onUpdate={onUpdate} />)}
        </div>
    )
  
   
   
}

export default TodoLists