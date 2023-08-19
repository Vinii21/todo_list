const TodoItem = ({todo, index, completed, defaultTodos, modifyLocalStorage}) => {

    const handleComplete = () => {
        defaultTodos[index].completed = !defaultTodos[index].completed;
        modifyLocalStorage([...defaultTodos])
    }

    const deleteTodo = () => {
        defaultTodos.splice(index, 1)
        modifyLocalStorage([...defaultTodos])
    }

    return (
        <li className={`${index % 2 === 0 ? "li" : "lili"}`}>
            <button onClick={()=>handleComplete()} title={completed ? "Completado" : "Incompleto"}>{completed ? "👍🏼" : "👎🏼"}</button>
            <p className={`${completed ? "completed" : ""}`}>{todo}</p>
            <button onClick={()=>deleteTodo()} className="span">❌</button>
        </li>
    );
}
 
export default TodoItem;