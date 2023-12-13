import React from 'react';
import { Button } from './ui/Button';
import { Todoicon } from './ui/todoIcon';

const taskCompleted = '#93e4c1';
const taskUncompleted = '#FFFFFF';

export const Todo = ({ task: todo, toggleComplete, deleteTodo }) => {
  return (
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
      style={{ backgroundColor: !todo.completed ? taskUncompleted : taskCompleted }}>
      <div>
        <div className="text-left">{todo.task}</div>
        <div className="text-gray-500 text-sm">{todo.date}</div>
      </div>
      <div>
        <Button type="button" className="px-2 text-red-600">
          <Todoicon name="delete" onClick={() => deleteTodo(todo.id)} />
        </Button>
        <Button type="button" className="px-2">
          <Todoicon
            name={`${!todo.completed ? 'complete' : ''}`}
            className={`${todo.completed ? '' : 'text-green-600'}`}
            onClick={() => {
              toggleComplete(todo.id);
            }}
          />
        </Button>
      </div>
    </div>
  );
};
