import { useContext } from "react";
import "./AddNewTodo.css";
import { Context } from "../../Context/Context";

const CreateTodoButton = ({subTask}) => {

    const {showModal, setShowModal} = useContext(Context);

    return (
        <button className={`${subTask ? "btn-subTask" : "btn"} ${subTask ? null : showModal ? "activeBtn" : ""}`} onClick={subTask ? null : ()=>setShowModal(true)}>➕</button>
    );
}
 
export default CreateTodoButton;