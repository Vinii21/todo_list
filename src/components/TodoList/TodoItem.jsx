import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const TodoItem = ({ todo, index, completed }) => {
    const { handleComplete, deleteTodo, editTodo } = useContext(Context);
    const [localEditMode, setLocalEditMode] = useState(false);
    const [textLocal, setTextLocal] = useState("");

    return (
        <li className={`${index % 2 === 0 ? "li" : "lili"}`}>
            <button
                className="like"
                onClick={() => handleComplete(index)}
                title={completed ? "Completado" : "Incompleto"}
            >
                {completed ? "👍🏼" : "👎🏼"}
            </button>
            {localEditMode ? (
                <div className="containerEdit">
                    <input className="editTodo" placeholder={todo} value={textLocal} onChange={(e)=>setTextLocal(e.target.value)}/>
                    <button className="edit" title="Borrar" onClick={() => editTodo(index, textLocal, setLocalEditMode)}>
                    💾
                    </button>
                </div>
            ) : (
                <p className={`${completed ? "completed" : ""}`}>{todo}</p>
            )}
            <div className="span">
                <button
                    className="edit"
                    title="Editar"
                    onClick={() => {
                        setLocalEditMode(!localEditMode); 
                    }}
                >
                    ✏️
                </button>
                <button className="edit" title="Borrar" onClick={() => deleteTodo(index)}>
                    ❌
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
