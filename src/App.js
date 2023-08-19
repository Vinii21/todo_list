import TodoCounter from './components/Nav/TodoCounter';
import TodoSearch from './components/Nav/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoList/TodoItem';
import CreateTodoButton from './components/AddNewTodo/CreateTodoButton';
import { useState } from 'react';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import useLocalStorage from './Hooks/useLocalStorage';
import TodosLoading from './components/TodosLoading/TodosLoading';

function App() {
  const [showModal, setShowModal] = useState(false);
  const {modifyLocalStorage, item, loading, error} = useLocalStorage("tareas", []);

  const [text, setText] = useState("");

  const completedTodos = item.filter(todo=> todo.completed).length;
  const searcheadTodos = item.filter(todo=> todo.text.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  
  return (
    <div className="App">
      <nav>
        <TodoCounter completed={completedTodos} total={item.length}/>
        <TodoSearch text={text} setText={setText}/>
      </nav>
      {error && <p style={{paddingTop: "250px"}}>Algo salio mal...! 😔</p>}
      {loading ? <TodosLoading />
      :
      item.length === 0 ?
      <p style={{paddingTop: "250px", textAlign: "center"}}>¡Todo está bien!😁 <br /> Crear tu primer tarea.😆</p>
      :
      <TodoList>
      {searcheadTodos.map((todo, index)=>(
        <TodoItem modifyLocalStorage={modifyLocalStorage} defaultTodos={item} key={todo.id+todo.text} todo={todo.text} index={index} completed={todo.completed}/>
      ))}
      </TodoList>
      }
      <CreateTodoButton setShowModal={setShowModal}/>
      <AddNewTodo setShowModal={setShowModal} defaultTodos={item} modifyLocalStorage={modifyLocalStorage} showModal={showModal}/>
    </div>
  );
}

export default App;