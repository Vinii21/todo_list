import { useContext } from "react";
import "./TodoSearch.css";
import { Context } from "../../Context/Context";

const TodoSearch = () => {

    const {text, setText, searcheadTodos} = useContext(Context);

    return (
        <input disabled={searcheadTodos.length !== 0 || text !== "" ? false : true} value={text} onChange={(e)=>setText(e.target.value)} className="input" type="text" placeholder="Buscador...🔍" />
    );
}
 
export default TodoSearch;