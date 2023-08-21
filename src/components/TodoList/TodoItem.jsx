import { useContext } from "react";
import { Context } from "../../Context/Context";

const TodoItem = ({todo, index, completed}) => {

    const {handleComplete, deleteTodo} = useContext(Context);

    return (
        <li className={`${index % 2 === 0 ? "li" : "lili"}`}>
            <button onClick={()=>handleComplete(index)} title={completed ? "Completado" : "Incompleto"}>{completed ? "👍🏼" : "👎🏼"}</button>
            <p className={`${completed ? "completed" : ""}`}>{todo}</p>
            <button onClick={()=> deleteTodo(index)} className="span">❌</button>
        </li>
    );
}
 
export default TodoItem;