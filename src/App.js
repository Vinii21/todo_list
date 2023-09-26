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
import Notes from './components/Notes/Notes';
import Categories from './components/Categories/Categories';
import ModalNewCategory from './components/Categories/ModalNewCategory';
import { ContextCategories } from './Context/ContextCategories';

function App() {

  const {loading, error, searcheadTodos, item} = useContext(Context);

  
  return (
    <>
      <div className="App">
        {loading ? (
          <NavSkeleton />
        ) : (
          <nav>
            <TodoCounter />
            <TodoSearch />
          </nav>
        )}
        {error && (
          <Notes
            note={"Parece que algo anda mal.😣"}
            noteTwo={"Revisa tu conexión o intentalo más tarde.😕"}
          />
        )}
        {loading ? (
          <TodosLoading />
        ) : item.length === 0 ? (
          <Notes
            note={"¡Todo está bien!😁"}
            noteTwo={"Crea tu primer tarea.😆"}
          />
        ) : (
          <TodoList>
            {searcheadTodos.length === 0 ? (
              <Notes data={true} note={"¡Ninguna de tus tareas coincide!😅"} noteTwo={"Prueba buscando con algo distinto.🧐"}/>
            ) : (
              searcheadTodos.map((todo, index) => (
                <TodoItem
                  key={todo.id + todo.text}
                  index={index}
                  todo={todo}
                />
              ))
            )}
          </TodoList>
        )}
        {loading ? <CreateNewTodoSkeleton /> : <CreateTodoButton />}
      </div>
      <Modal>
        <AddNewTodo />
        {/* {loading ? null : <Categories />}
        <ModalNewCategory /> */}
      </Modal>
    </>
  );
}

export default App;