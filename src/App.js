import TodoCounter from './components/Nav/TodoCounter';
import TodoSearch from './components/Nav/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoList/TodoItem';
import CreateTodoButton from './components/AddNewTodo/CreateTodoButton';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import TodosLoading from './components/TodosLoading/TodosLoading';
import { Context, Provider } from './Context/Context';

function App() {
  
  return (
    <Provider>
    <div className="App">
      <nav>
        <TodoCounter/>
        <TodoSearch/>
      </nav>
      <Context.Consumer>
        {({error, loading, modifyLocalStorage, item, searcheadTodos})=>(
          <>
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
          </>
        )}
      </Context.Consumer>
      <CreateTodoButton/>
      <AddNewTodo/>
    </div>
    </Provider>
  );
}

export default App;