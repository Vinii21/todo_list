import { useState } from "react";
import "../css/AddNewTodo.css"

const AddNewTodo = ({showModal, setShowModal, modifyLocalStorage, defaultTodos}) => {

    const [newTodo, setNewTodo] = useState("")
    const [placeholder, setPlaceholder] = useState(false)


    const addNewTodo = () => {

        if(newTodo === "") {
            setPlaceholder(true);
        } else {
            const maximo = 909090909090909;
            const obj = {id: Math.random() * maximo + 1, text: newTodo, completed: false}
            modifyLocalStorage([...defaultTodos, obj])
            setNewTodo("");
            setShowModal(false);
            setPlaceholder(false);
        }
        
    }
    

    return (
        <div className={`container-newTodo ${showModal ? "showContainer-newTodo" : ""}`}>
            <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className={`inputNewTodo ${placeholder ? "active" : ""}`} type="text" placeholder={"Escribe algo para crear una tarea."}/>
            <div className="containerBtns">
                <button className="btnNewModal" onClick={()=>addNewTodo()}>Crear</button>
                <button className="btnNewModal" onClick={()=>{setShowModal(false); setPlaceholder(false)}}>Cancelar</button>
            </div>
        </div>
    );
}
 
export default AddNewTodo;