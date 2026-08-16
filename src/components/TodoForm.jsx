import { useState } from "react"
function TodoForm ({setTodos}){
    const [todo , setTodo] = useState('')
    const handleSubmit = () => {
       
       
       const newTodo = {
        id:Date.now(),
         text:todo,
       }
       setTodos((prevTodos)=> [...prevTodos , newTodo])
       console.log('after:',newTodo)
       setTodo('')
    }
    return(
        <div>
            <input type="text " placeholder="Enter a todo" value={todo}  onChange={(e) => { setTodo(e.target.value)
               
            }} />
     <button onClick={handleSubmit}> Add</button>
        </div>
    )
}

export default TodoForm