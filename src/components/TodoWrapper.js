import React, { useState, useContext } from 'react';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { ThemeContext } from './context/theme';
import { Lightswitch } from './ui/Lightswitch';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const [{ theme }, toggleTheme] = useContext(ThemeContext);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, date: new Date().toString() }
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div
      className="fixed w-full h-full"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <TodoHeader />
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="mt-8 text-2xl text-left m-5">Todos</h1>
          <Lightswitch />
        </div>
        <div className="md:flex md:flex-row md:order-first md:gap-4 m-5 md:m-0">
          <div className="md:flex-1 md:order-last text-black">
            <TodoForm addTodo={addTodo} />
          </div>
          <div className="grid gap-4 mt-3 md:flex-1">
            <div className="col-span-6 space-y-4 overflow-y-auto px-1 pb-2 text-black">
              {todos.map((todo, index) => (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))}
              {!todos.length && (
                <div
                  className="p-8
                                bg-white
                                shadow-md
                                rounded
                                flex
                                items-center
                                justify-between
                                text-gray-700
                                text-sm"
                  style={{ height: '148px' }}>
                  You dont have any task to do.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
