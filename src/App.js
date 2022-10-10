import React,{ useState, useEffect}from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Header from './component/Header';
import TodoList from './component/TodoLists';

function App() {
  // const initialState =JSON.parse(localStorage.getItem("todos") || []);
  const [input,setInput]= useState("");
  const [todos,setTodos]= useState([]);
  const [editTodo,setEditTodo]=useState(null);
  const [test, setTest] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => setTest(data))
  }, [])

  console.log(test);
 
  return (
    <div className="container">
      <div className="App-wrapper" >
        <div>
          <Header />
        </div>
        <div>
          <TodoForm input={input}  setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div>
         <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
