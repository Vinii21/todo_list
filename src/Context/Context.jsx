import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const { modifyLocalStorage, item, loading, error } = useLocalStorage(
    "tareas",
    []
  );

  const [text, setText] = useState("");

  const completedTodos = item.filter((todo) => todo.completed).length;
  const searcheadTodos = item
    .filter((todo) =>
      todo.text.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  const filterCompletedTodos = item.filter((todo)=>todo.completed === true);
  const filterIncompletedTodos = item.filter((todo)=>todo.completed === false);

  const handleComplete = (index) => {
    searcheadTodos[index].completed = !searcheadTodos[index].completed;
    modifyLocalStorage([...item]);
  };

  const deleteTodo = (index) => {
    const originalIndex = item.findIndex(todo => todo === searcheadTodos[index]);
    const updatedTodos = [...item];
    updatedTodos.splice(originalIndex, 1);
    modifyLocalStorage(updatedTodos);
    setText("")
  };

  const handleCompletedSubTask = (index, id) => {
    const todo = searcheadTodos.find(data=>data.id===id);
    const originalIndex = item.indexOf(todo);
    searcheadTodos[originalIndex].subTask[index].completed = !searcheadTodos[originalIndex].subTask[index].completed
    modifyLocalStorage([...item]);
  }

  const handleDeleteSubTask = (index, id) => {
    const todo = item.find(data=>data.id===id);
    const originalIndex = item.indexOf(todo);
    const updatedTodos = [...item];
    const access = updatedTodos[originalIndex].subTask;
    access.splice(index, 1);
    modifyLocalStorage([...updatedTodos]);
  }

  const editTodo = (index, newText, setLocalEditMode) => {
    const defecto = searcheadTodos[index].text
    if(newText === "") {
      searcheadTodos[index].text = defecto
    } else {
      searcheadTodos[index].text = newText
    }
    modifyLocalStorage([...item]);
    setLocalEditMode(false);
    setText("");
  };

  return (
    <Context.Provider
      value={{
        showModal,
        setShowModal,
        modifyLocalStorage,
        item,
        loading,
        error,
        text,
        setText,
        completedTodos,
        searcheadTodos,
        handleComplete,
        deleteTodo,
        filterCompletedTodos,
        filterIncompletedTodos,
        editTodo, 
        handleCompletedSubTask,
        handleDeleteSubTask
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
