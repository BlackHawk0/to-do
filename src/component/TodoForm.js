import React, { useEffect, useState } from 'react'
import Todo from './Todo';



// const TodoForm = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
//   const updateTodo=(title,id,completed)=>{
//     const newTodo=todos.map((todo)=>
//       todo.id === id ? {title, id, completed}: todo
//     );
//     setTodos(newTodo);
//     setEditTodo("");
//   };
//   useEffect(()=>{
//     if(editTodo){
//       setInput(editTodo.title)
//     }else{
//       setInput("")
//     }
//   },[setInput, editTodo] );
//   const onInputChange = (event) => {
//     setInput(event.target.value);
//   }
//   const onFormSubmit=(event)=>{
//     event.preventDefault();
//     if(!editTodo){
//       setTodos([...todos, {id:todos.id, title:input, completed: false}]);
//       setInput("");
//     }else{
//       updateTodo(input,editTodo.id.completed)
//     }
   
//   } 

function TodoForm(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState({title:'', completed: false});

    const handleChange = (e) => {
        setInput(e.target.value);
    }

     const handleSubmit = (e) => {
        e.preventDefault();
        // setTodos([...todos, input]);
        // setInput("");
        fetch('http://localhost:3000/todos', {
             method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               title: input,
               completed: false
           })
       })
       .then(response => response.json())
       .then(data => {
           setTodos([...todos, data]);
           setInput("");
       })
    }
    // console.log(todos);

    return (
        <div>
            <form>
              <input type="text" className="task-input" placeholder='Enter a Todo...' onChange={handleChange} />
              <button type="submit" className='button-add' onClick={handleSubmit}>Add Todo</button>
            </form>
            {/* <ul>
                {todos.map(todo => (
                    <Todo key={todo.id}
                     todo={todo}/>
                ))}
            </ul> */}
        </div>
    )
}

export default TodoForm;