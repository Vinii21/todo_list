import { useContext, useState } from "react";
import "./AddNewTodo.css"
import { Context } from "../../Context/Context";
import { TbRectangularPrismPlus } from "react-icons/tb";
import { ContextCategories } from "../../Context/ContextCategories";

import ModalNewCategory from "../Categories/ModalNewCategory";
import Modal from "./Modal";

const AddNewTodo = () => {

    const {item: defaultTodos, modifyLocalStorage, setShowModal, showModal} = useContext(Context);
    const {showModalNewCategory, setShowModalNewCategory, category: categories} = useContext(ContextCategories)

    const [newTodo, setNewTodo] = useState("");
    const [placeholder, setPlaceholder] = useState(false);
    const [category, setCategory] = useState("General");


    const addNewTodo = () => {

        if(newTodo === "") {
            setPlaceholder(true);
        } else {
            const maximo = 909090909090909;
            const obj = {id: Math.random() * maximo + 1, text: newTodo, completed: false, category: category, subTask: []}
            modifyLocalStorage([...defaultTodos, obj])
            setNewTodo("");
            setShowModal(false);
            setPlaceholder(false)
        }
        
    }
    

    return (
      <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`container-newTodo ${
          showModal ? "showContainer-newTodo" : ""
        }`}
      >
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`inputNewTodo ${placeholder ? "active" : ""}`}
          type="text"
          placeholder={"Escribe algo para crear una tarea."}
        />
        {/* <span className="info">Puedes colocar está tarea en una categoría</span>
        <div className="conatiner-category">
            <select className="select-category" onChange={(e) => setCategory(e.target.value)}>
            <option value={"General"}>General</option>
            {categories.map((item, index) => (
                <option value={item} key={index}>{item}</option>
            ))}
            </select>
            <button className="add-card" title="Agregar nueva categoría" onClick={()=>setShowModalNewCategory(!showModalNewCategory)}>
            <TbRectangularPrismPlus />
            </button>
        </div> */}
        <div className="containerBtns">
          <button
            type="submit"
            className="btnNewModal"
            onClick={() => addNewTodo()}
          >
            Crear
          </button>
          <button
            className="btnNewModal"
            onClick={() => {
              setPlaceholder(false);
              setShowModal(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
      </>
    );
}

export default AddNewTodo;