import React , {useState } from 'react'



function TodoForm(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState({title:'', completed: false});

    const handleChange = (e) => {
        setInput(e.target.value);
    }

     const handleSubmit = (e) => {
        e.preventDefault();
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
           setTodos({...todos, data});
           setInput("");
           
       })
    }


    return (
        <div>
            <form>
              <input type="text" className="task-input" placeholder='Enter a Todo...' onChange={handleChange} />
              <button type="submit" className='button-add' onClick={handleSubmit}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;