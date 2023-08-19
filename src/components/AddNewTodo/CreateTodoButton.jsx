import "./AddNewTodo.css";

const CreateTodoButton = ({setShowModal}) => {

    return (
        <button className="btn" onClick={()=>setShowModal(true)}>➕</button>
    );
}
 
export default CreateTodoButton;