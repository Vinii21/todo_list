import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import { useEffect, useState } from 'react';
import AddNewTodo from './components/AddNewTodo';

function App() {
  const [defaultTodos, setDefaultTodo] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    const getLocalStorage = localStorage.getItem("tareas_v1");
    if(!getLocalStorage) {
      localStorage.setItem("tareas_v1", JSON.stringify([]));
      const firstLocalStorage = localStorage.getItem("tareas_v1")
      setDefaultTodo(JSON.parse(firstLocalStorage));
    } else {
      const parse = JSON.parse(getLocalStorage);
      setDefaultTodo(parse)
    }
  },[])

  const [text, setText] = useState("");

  const completedTodos = defaultTodos.filter(todo=> todo.completed).length;
  const searcheadTodos = defaultTodos.filter(todo=> todo.text.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

  const modifyLocalStorage = (newTODOS) => {
    localStorage.setItem("tareas_v1", JSON.stringify(newTODOS))
    setDefaultTodo(newTODOS)
  }
  
  return (
    <div className="App">
      <nav>
        <TodoCounter completed={completedTodos} total={defaultTodos.length}/>
        <TodoSearch text={text} setText={setText}/>
      </nav>
      <TodoList>
        {searcheadTodos.map((todo, index)=>(
          <TodoItem modifyLocalStorage={modifyLocalStorage} defaultTodos={defaultTodos} setDefaultTodo={setDefaultTodo} key={todo.id+todo.text} todo={todo.text} index={index} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton setShowModal={setShowModal}/>
    <AddNewTodo setShowModal={setShowModal} defaultTodos={defaultTodos} modifyLocalStorage={modifyLocalStorage} showModal={showModal}/>
    </div>
  );
}

export default App;