import "../css/TodoList.css"

const TodoList = (props) => {
    return (
        <ul className="ul">
            {props.children}
        </ul>
    );
}
 
export default TodoList;