import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FcCheckmark } from 'react-icons/fc'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <button><FcCheckmark className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}/></button>
      </div>
    </div>
  )
}
