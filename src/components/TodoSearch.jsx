import "../css/TodoSearch.css";

const TodoSearch = ({text, setText}) => {

    return (
        <input value={text} onChange={(e)=>setText(e.target.value)} className="input" type="text" placeholder="Buscador...🔍" />
    );
}
 
export default TodoSearch;