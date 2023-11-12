import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { LiaTimesSolid } from 'react-icons/lia'
import { AiOutlineUndo } from 'react-icons/ai'

export const Todo = ({ task, toggleComplete, deleteTodo }) => {

  return (
    <div className="
    p-8
    bg-white
    shadow-md
    rounded
    flex
    items-center
    justify-between
    "
      style={{ backgroundColor: !task.completed ? '#FFFFFF' : '#93e4c1' }}>
      <div>
        <div className='text-left'>{task.task}</div>
        <div className="text-gray-500 text-sm">{task.date}</div>
      </div>
      <div>
        <button className="px-2 text-red-600">
          <LiaTimesSolid onClick={() => deleteTodo(task.id)} />
        </button>
        {task.completed !== true ? (
          <button className="px-2 text-green-600">
            <FcCheckmark className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => { toggleComplete(task.id) }} />
          </button>
        ) : (
          <button className="px-2">
            <AiOutlineUndo className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => { toggleComplete(task.id) }} />
          </button>
        )}
      </div>
    </div>
  )
}
