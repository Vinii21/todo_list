import "../css/TodoCounter.css"

const TodoCounter = ({completed, total}) => {
    return (
        
        <h1>{total > 0 && completed === total ? "¡Felicidades, completaste todas las tareas!😁" 
        : total === 0 ? "Aún no tienes ninguna tarea" : `Has completado ${completed} de ${total} TODOS`}</h1>
    );
}
 
export default TodoCounter;