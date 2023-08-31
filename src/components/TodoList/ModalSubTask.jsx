import { useContext } from "react";
import "./TodoList.css"
import { Context } from "../../Context/Context";
import CreateTodoButton from "../AddNewTodo/CreateTodoButton";

const ModalSubTask = ({text, setSubTaskModeMode, subTask}) => {

    const {addSubTask} = useContext(Context)

    return (
        <>
        <div className="subTask">
            <div className="subTask-header">
                <span className="title">{text}</span>
                <span onClick={()=>setSubTaskModeMode(false)} className="closed" title="Bye">👋🏽</span>
            </div>
            <ul className="subTask-body">
                {
                    [1,1,1,1,1,1,1].map(()=>(
                        <li className="sub"><input type="checkbox" /> Qué hacer?</li>
                    ))
                }
            </ul>
            <div>
                <CreateTodoButton subTask={true}/>
            </div>
        </div>
        
        </>
    );
}
 
export default ModalSubTask;