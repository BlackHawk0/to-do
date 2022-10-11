import React,{ useState, useEffect}from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Header from './component/Header';
import TodoList from './component/TodoLists';

function App() {

  const [test, setTest] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => setTest(data))
  }, [])


  // delete todo list
  function deleteTodo(id){
    setTest(test.filter(todo => todo.id !== id))
    fetch(`http://localhost:3000/todos/${id}`,{
      method: 'DELETE',
    })

  }
  //update a todo 
  function handleUpdate(todo){
    fetch(`http://localhost:3000/todos/${todo.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
  }

 
  return (
    <div className="container">
      <div className="App-wrapper" >
        <div>
          <Header />
        </div>
        <div>
         <TodoForm items={test} del={deleteTodo} onUpdate={handleUpdate}/> 
          {/* <TodoForm input={input}  setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/> */}
        </div>
        <div>
         {/* <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/> */}
         {/* <TodoList todos={test} /> */}
        
        </div>
      </div>  
    </div>
  );
}

export default App;
