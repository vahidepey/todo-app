import { useState } from 'react'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
 const [ todos , setTodos] = useState ([])
  return (
    <div>
      <h1> Todo App </h1>
      <TodoForm setTodos = {setTodos}  />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App