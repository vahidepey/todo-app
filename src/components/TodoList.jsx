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
            <h2 className="todo-title"> Todo List </h2>
            {todos.map((todo) =>(
            
            <div className="todo-item"  key= {todo.id}> 
            <p className={todo.completed ? "completed" : ""}>{todo.text}</p> 

            <div className="todo-actions">
            <button  className="todo-btn   edit-btn" onClick={()=>handleEdit(todo.id)} > Edit </button>
            <button className="todo-btn delete-btn" onClick={()=>handleDelete(todo.id)} >Delete</button>
            <button className="todo-btn completed-btn"  onClick={()=>{
                setTodos(todos.map((item)=> item.id === todo.id ? {...item,completed: !item.completed} :item
            ));
            }}>Done</button>
            </div>
            </div>        
            )) }
        </div>
    )
}

export default TodoList