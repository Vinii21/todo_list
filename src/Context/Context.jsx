import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const { modifyLocalStorage, item, loading, error } = useLocalStorage( "tareas", []);

  const [text, setText] = useState("");

  const completedTodos = item.filter((todo) => todo.completed).length;
  const searcheadTodos = item.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(text.toLocaleLowerCase())
  );

  return (
    <Context.Provider value={{
        showModal, setShowModal, modifyLocalStorage, item, loading, error, text, setText, completedTodos, searcheadTodos
     }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
