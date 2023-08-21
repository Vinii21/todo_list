import { useContext } from "react";
import "./AddNewTodo.css";
import { Context } from "../../Context/Context";

const CreateTodoButton = () => {

    const {setShowModal} = useContext(Context);

    return (
        <button className="btn" onClick={()=>setShowModal(true)}>➕</button>
    );
}
 
export default CreateTodoButton;