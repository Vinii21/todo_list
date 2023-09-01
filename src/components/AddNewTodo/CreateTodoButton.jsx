import { useContext } from "react";
import "./AddNewTodo.css";
import { Context } from "../../Context/Context";

const CreateTodoButton = ({addNewSubTodo, subTask, localShowAddNewSubTask, text, setLocalShowAddNewSubTask, setTextLocal}) => {
    const {showModal, setShowModal} = useContext(Context);
    const ShowAddNewSubTask = localShowAddNewSubTask === undefined ? false : localShowAddNewSubTask;

    const verifyOnClick = () => {
        if(text) {
            addNewSubTodo()
        } else if(subTask) {
            setLocalShowAddNewSubTask(!localShowAddNewSubTask)
        } else {
            setShowModal(true)  
        }
    }

    return (
        <button className={`${subTask ? "btn-subTask" : "btn"} ${subTask ? null : showModal ? "activeBtn" : ""} ${ShowAddNewSubTask && text ? "btn-sendNewTask" : ""}`} onClick={()=>verifyOnClick()}>➕</button>
    );
}
 
export default CreateTodoButton;