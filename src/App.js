import TodoCounter from './components/Nav/TodoCounter';
import TodoSearch from './components/Nav/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoList/TodoItem';
import CreateTodoButton from './components/AddNewTodo/CreateTodoButton';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import TodosLoading from './components/TodosLoading/TodosLoading';
import { Context } from './Context/Context';
import { useContext } from 'react';
import Modal from './components/AddNewTodo/Modal';
import NavSkeleton from './components/TodosLoading/NavSkeleton';
import CreateNewTodoSkeleton from './components/TodosLoading/CreateNewTodoSkeleton';

function App() {

  const {loading, error, searcheadTodos, item} = useContext(Context);
  
  return (
    <>
    <div className="App">
      {
        loading ? <NavSkeleton /> :
      <nav>
        <TodoCounter/>
        <TodoSearch/>
      </nav>
      }
      {error && <p style={{paddingTop: "250px"}}>Algo salio mal...! 😔</p>}
      {loading ? 
      <TodosLoading />  
      :
      item.length === 0 ?
      <p style={{paddingTop: "250px", textAlign: "center"}}>¡Todo está bien!😁 <br /> Crea tu primer tarea.😆</p>
      :
      <TodoList>
      {searcheadTodos.map((todo, index)=>(
        <TodoItem key={todo.id+todo.text} todo={todo.text} index={index} completed={todo.completed}/>
      ))}
      </TodoList>
      }
      {
        loading ? <CreateNewTodoSkeleton /> : <CreateTodoButton/>
      }
      
    </div>
        <Modal>
          <AddNewTodo/>
        </Modal>
      </>
  );
}

export default App;