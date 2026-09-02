import { useState } from "react"
function TodoForm ({setTodos}){
    const [todo , setTodo] = useState('')
    const handleSubmit = () => {
       
       
       const newTodo = {
        id:Date.now(),
         text:todo,
         completed:false
       };
       setTodos((prevTodos)=> [...prevTodos , newTodo])
       console.log('after:',newTodo)
       setTodo('')
    }
    return(
        <div className="todo-form">
            <input className="todo-input" type="text " placeholder="Enter a todo" value={todo}  onChange={(e) => { setTodo(e.target.value)
               
            }} />
     <button className="add-btn"  onClick={handleSubmit}> Add</button>
        </div>
    )
}

export default TodoForm