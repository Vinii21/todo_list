import { useContext } from "react";
import "./TodoCounter.css"
import { Context } from "../../Context/Context";

const TodoCounter = () => {

    const {item: total, completedTodos: completed} = useContext(Context);

    return (
        
        <h1>{total.length > 0 && completed === total.length ? "¡Felicidades, completaste todas las tareas!😁" 
        : total.length === 0 ? "Aún no tienes ninguna tarea" : `Has completado ${completed} de ${total.length} TODOS`}</h1>
    );
}
 
export default TodoCounter;