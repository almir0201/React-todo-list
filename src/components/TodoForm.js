import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    setValue("")
  }

  return (
    <div className="container mx-auto">
      <div className="mt-3">
          <div className="col-span-6">
            <form className='p-8 bg-white shadow-md rounded' onSubmit={handleSubmit}>
              <h2 className="text-xl text-left">Add a todo</h2>
              <input type='text' className='p-2 mt-4 border rounded w-full' value={value} onChange={(e) => setValue(e.target.value)} />
            </form>
          </div>
        </div>
      </div>
  )
}
