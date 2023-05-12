import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

// Todo Context Provider
const TodoProvider =  ({ children }) => {
  const [todos, setTodos] = useState([]); // todos state
  const [active, setActive] = useState([]); // active tasks state
  const [completed, setCompleted] = useState([]); // completed tasks state

  // Add todo function
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

  // Delete todo function
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(d => d.id !== id);
    setTodos(updatedTodos);
  };

  // Update todo function
  const updateTodo = (id, value, ) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, value: value } : todo);
    setTodos(updatedTodos);
  }

  // Set done todo function
  const setDone = (id) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, done: !todo.done } : todo);
    setTodos(updatedTodos);
  };

  // Effect hooks
  useEffect(() => {
    setActive(todos.filter(d => !d.done)); // Set new active taks when todos state changes
    setCompleted(todos.filter(d => d.done)); // Set new completed taks when todos state changes
  }, [todos])

  useEffect(() => {
    // Load todos from localStorage on component mount
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Context properties exported
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
