import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import Modal from "../AddNewTodo/Modal";
import ModalSubTask from "./ModalSubTask";

const TodoItem = ({ todo, index}) => {
    const {completed, text, subTask} = todo;
    const { handleComplete, deleteTodo, editTodo} = useContext(Context);
    const [localEditMode, setLocalEditMode] = useState(false);
    const [localSubTaskMode, setSubTaskModeMode] = useState(false);
    const [textLocal, setTextLocal] = useState(text);

    return (
        <>
        <li className={`${index % 2 === 0 ? "li" : "lili"}`}>
            <button
                className="like"
                onClick={() => handleComplete(index)}
                title={completed ? "Completado" : "Incompleto"}
            >
                {completed ? "👍🏼" : "👎🏼"}
            </button>
            {localEditMode ? (
                <form onSubmit={(e)=>e.preventDefault()} className="containerEdit">
                    <input className="editTodo" placeholder={todo} value={textLocal} onChange={(e)=>setTextLocal(e.target.value)}/>
                    <button type="submit" className="edit" title="Borrar" onClick={() => editTodo(index, textLocal, setLocalEditMode)}>
                    💾
                    </button>
                </form>
            ) : (
                <p className={`${completed ? "completed" : ""}`}>{text}</p>
            )}
            <div className="span">
               {/*  <button className="edit" title="Sub-tareas" onClick={()=>setSubTaskModeMode(true)}>
                    📜
                </button> */}
                <button
                    className="edit"
                    title="Editar"
                    onClick={() => {
                        setLocalEditMode(!localEditMode); 
                    }}
                >
                    ✏️
                </button>
                <button className="edit" title="Borrar" onClick={() => {deleteTodo(index); setSubTaskModeMode(false)}}>
                    ❌
                </button>
            </div>
        </li>
        { localSubTaskMode &&
        <Modal>
            <ModalSubTask subTask={subTask} text={text} setSubTaskModeMode={setSubTaskModeMode}/>
        </Modal>
        }
        </>
    );
};

export default TodoItem;
