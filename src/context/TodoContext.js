import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider =  ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, {
        id: todos.length+1,
        value: newTodo,
        done: false
      }]);
    }
    console.log(todos)
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(d => d.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, value, ) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, value: value } : todo);
    setTodos(updatedTodos);
  }

  const setDone = (id) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, done: !todo.done } : todo);
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
    updateTodo,
    setDone
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
