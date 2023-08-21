import { useContext } from "react";
import "./TodoSearch.css";
import { Context } from "../../Context/Context";

const TodoSearch = () => {

    const {text, setText} = useContext(Context);

    return (
        <input value={text} onChange={(e)=>setText(e.target.value)} className="input" type="text" placeholder="Buscador...🔍" />
    );
}
 
export default TodoSearch;