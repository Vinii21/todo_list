import { useContext } from "react";
import "./AddNewTodo.css";
import { Context } from "../../Context/Context";

const CreateTodoButton = () => {

    const {showModal, setShowModal} = useContext(Context);

    return (
        <button className={`btn ${showModal ? "activeBtn" : ""}`} onClick={()=>setShowModal(true)}>➕</button>
    );
}
 
export default CreateTodoButton;