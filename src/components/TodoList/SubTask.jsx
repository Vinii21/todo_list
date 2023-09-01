import { useContext } from "react";
import { Context } from "../../Context/Context";

const SubTask = ({item, index, id}) => {
    const {handleCompletedSubTask, handleDeleteSubTask} = useContext(Context)
    
    return (
        <div className="containerSub">
        <li className={`sub ${item.completed ? "subcompleted" : ""}`}><input type="checkbox" value={item.completed} onChange={()=>handleCompletedSubTask(index, id)} checked={item.completed} /> {item.name}</li>
        <button onClick={()=>{handleDeleteSubTask(index, id)}} className="delete_subTask">🧹</button>
        </div>
     );
}
 
export default SubTask;