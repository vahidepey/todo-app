function TodoList({todos , setTodos}) {
    const handleDelete = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

     const handleEdit = (id) =>{
       const newText = prompt ('Enter new text :')
        if (!newText) return
            setTodos(
                todos.map((todo) =>
                    todo.id===id?{...todo, text : newText} : todo
                )
            )}
            
    return (
        <div>
            <h2> Todo List </h2>
            {todos.map((todo) =>(
            
            <div key= {todo.id}> 
            <p>{todo.text}</p> 
            <button onClick={()=>handleEdit(todo.id)} > Edit </button>
            <button onClick={()=>handleDelete(todo.id)} >Delete</button> 
            </div>        
            )) }
        </div>
    )
}

export default TodoList