import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import { useEffect, useState } from 'react';
import AddNewTodo from './components/AddNewTodo';

function useLocalStorage(itemName, inicialState) {

  const [item, setItem] = useState(inicialState);

  useEffect(()=>{
    const getLocalStorage = localStorage.getItem(itemName);
  if(!getLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify([]));
    const firstLocalStorage = localStorage.getItem(itemName)
    setItem(JSON.parse(firstLocalStorage));
  } else {
    const parse = JSON.parse(getLocalStorage);
    setItem(parse)
  }
  },[])

  const modifyLocalStorage = (newTODOS) => {
    localStorage.setItem(itemName, JSON.stringify(newTODOS))
    setItem(newTODOS)
  }

  return [modifyLocalStorage, item];
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [ modifyLocalStorage, item] = useLocalStorage("tareas", []);

  const [text, setText] = useState("");

  const completedTodos = item.filter(todo=> todo.completed).length;
  const searcheadTodos = item.filter(todo=> todo.text.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  
  return (
    <div className="App">
      <nav>
        <TodoCounter completed={completedTodos} total={item.length}/>
        <TodoSearch text={text} setText={setText}/>
      </nav>
      <TodoList>
        {searcheadTodos.map((todo, index)=>(
          <TodoItem modifyLocalStorage={modifyLocalStorage} defaultTodos={item} key={todo.id+todo.text} todo={todo.text} index={index} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton setShowModal={setShowModal}/>
    <AddNewTodo setShowModal={setShowModal} defaultTodos={item} modifyLocalStorage={modifyLocalStorage} showModal={showModal}/>
    </div>
  );
}

export default App;