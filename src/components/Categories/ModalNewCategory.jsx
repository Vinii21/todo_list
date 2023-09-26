import { TbRectangularPrismPlus } from "react-icons/tb";
import "./styleModal.css";
import { useContext, useState } from "react";
import { ContextCategories } from "../../Context/ContextCategories";

const ModalNewCategory = () => {

    const [newCategory, setNewCategory] = useState("");
    const {showModalNewCategory, addNewCategory, setShowModalNewCategory} = useContext(ContextCategories)

    return (
        <div className={`containerNewCategory ${showModalNewCategory && "showModal"}`}>
            <button className="btnClosed" onClick={()=>setShowModalNewCategory(false)}>❌</button>
            <div className="conatiner-inputs">
            <button className="btnIcon" title="Selecciona un icono">😂</button>
            <button className="btnIcon" title="Selecciona un color">🔴</button>
            <input value={newCategory} onChange={(e)=>setNewCategory(e.target.value)} className="inputNewCategory" type="text" maxLength={20} placeholder="Máximo 20 caracteres"/>
            </div>
            <button onClick={()=>{addNewCategory(newCategory); setNewCategory(""); setShowModalNewCategory(false)}}  disabled={newCategory === "" ? true : false} className="btnNewCategory"><TbRectangularPrismPlus /></button>
        </div>
    );
}
 
export default ModalNewCategory;