import React, { useState } from 'react'
import '../index.css';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false, date: new Date() }])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }

      const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    return (
        <div>
            <div> 
                <TodoHeader />
            </div>
            <div className='container mx-auto'>
            <h1 className="mt-8 text-2xl">Todos</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4 mt-3">
                    <div
                        className="col-span-6 space-y-4 overflow-y-auto px-1"
                    >
                        {todos.map((todo, index) => (
                            <div
                                className="
                                p-8
                                bg-white
                                shadow-md
                                rounded
                                flex
                                items-center
                                justify-between
                                "
                                style={{"height" : "148px"}}
                                >
                                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                                {todos.map((element) => (
                                    <div>{element.date.toString}</div>
                                ))}
                            </div>
                        ))}
                        {todos.length === 0 &&
                        <div 
                            className=' p-8
                            bg-white
                            shadow-md
                            rounded
                            flex
                            items-center
                            justify-between
                            text-gray-700 
                            text-sm'
                            style={{"height" : "148px"}}>
                            You dont have any task to do.
                        </div>
                        }
                    </div>
                </div>
                <TodoForm addTodo={addTodo} />
            </div>
            </div>
        </div>
    )
}
