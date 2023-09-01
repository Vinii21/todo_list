import { useContext, useState } from "react";
import "./TodoList.css"
import { Context } from "../../Context/Context";
import CreateTodoButton from "../AddNewTodo/CreateTodoButton";
import SubTask from "./SubTask";

const ModalSubTask = ({todo, setSubTaskModeMode}) => {

    const {text, subTask} = todo;
    const prevent = subTask === undefined ? [] : subTask
    const {item: defaultTodos, modifyLocalStorage} = useContext(Context)
    const [localShowAddNewSubTask, setLocalShowAddNewSubTask] = useState(false);
    const [textLocal, setTextLocal] = useState("");
    
    const addNewSubTodo = () => {
            const newSubTask = {name: textLocal, completed: false};
            const findTodo = defaultTodos.find(item=> item.id === todo.id);
            if(!findTodo.subTask) {
                findTodo.subTask = []
            } 
            findTodo.subTask.push(newSubTask)
            const getIndex = defaultTodos.indexOf(todo);
            defaultTodos.splice(getIndex, 1, findTodo);
            modifyLocalStorage(defaultTodos);
            setLocalShowAddNewSubTask(false);
            setTextLocal("");
    }

    return (
        <>
        <div className="subTask">
            <div className="subTask-header">
                <span className="title">{text}</span>
                <span onClick={()=>setSubTaskModeMode(false)} className="closed" title="Bye">👋🏽</span>
            </div>
            <ul className="subTask-body">
                {
                    localShowAddNewSubTask &&
                    <li className={`subNew`}><input value={textLocal} onChange={(e)=>setTextLocal(e.target.value)} type="text" className="new-subTask" placeholder="Escribe la nueva Sub-tarea"/></li>
                }
                { 
                    prevent.map((item, index)=>(
                        <SubTask id={todo.id} index={index} item={item} key={index}/>
                    ))
                }
            </ul>
            <div>
                <CreateTodoButton addNewSubTodo={addNewSubTodo} setTextLocal={setTextLocal} setLocalShowAddNewSubTask={setLocalShowAddNewSubTask} text={textLocal} localShowAddNewSubTask={localShowAddNewSubTask} subTask={true}/>
            </div>
        </div>
        
        </>
    );
}
 
export default ModalSubTask;