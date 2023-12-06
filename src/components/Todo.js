import React from 'react';
import { Button } from './ui/Button';
import { FcCheckmark } from 'react-icons/fc';
// import { LiaTimesSolid } from 'react-icons/lia';
import { AiOutlineUndo } from 'react-icons/ai';
import { Todoicon } from './ui/todoIcon';

//rename task to todo
//refaktorisati button, kreiraj novi fajl, property type i children

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
        {/* //napraviti novi fajl za icon(todoIcon), dinamicna klasa green */}
        {/* //if completed ikona 1 else iknoa 2 */}
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
