import TodoCounter from './components/Nav/TodoCounter';
import TodoSearch from './components/Nav/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoList/TodoItem';
import CreateTodoButton from './components/AddNewTodo/CreateTodoButton';
import { useState } from 'react';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import useLocalStorage from './Hooks/useLocalStorage';

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