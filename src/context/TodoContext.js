import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider =  ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, {
        id: todos.length,
        value: newTodo,
        done: false
      }]);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(d => d.id !== id);
    setTodos(updatedTodos);
  };

  const setDone = (id) => {
    const updatedTodos = [...todos]
    updatedTodos[id].done = !updatedTodos[id].done;
    setTodos(updatedTodos);
  };

  useEffect(() => {
    setActive(todos.filter(d => !d.done));
    setCompleted(todos.filter(d => d.done));
  }, [todos])

  const contextValue = {
    todos, active, completed,
    addTodo,
    deleteTodo,
    setDone
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
