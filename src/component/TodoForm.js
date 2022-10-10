import React, { useEffect } from 'react'



const TodoForm = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=>
      todo.id === id ? {title, id, completed}: todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title)
    }else{
      setInput("")
    }
  },[setInput, editTodo] );
  const onInputChange = (event) => {
    setInput(event.target.value);
  }
  const onFormSubmit=(event)=>{
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos, {id:todos.id, title:input, completed: false}]);
      setInput("");
    }else{
      updateTodo(input,editTodo.id.completed)
    }
   
  } 
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter a Todo...' className='task-input'  onChange={onInputChange}/>
        <button className='button-add' type='submit'>
          {editTodo ? "OK" : "Add"}
        </button>

      </form>
    </div>
  )
}

export default TodoForm