import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/Input';

const schema = z.object({
  value: z.string().min(1, { message: 'Todo is required' })
});

export const TodoForm = ({ addTodo }) => {
  const {
    reset,
    register,
    props,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  const onError = (errors) => {
    console.log(errors);
  };

  const onSubmit = (data) => {
    const { value } = data;
    addTodo(value);
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="mt-3">
        <div className="col-span-6">
          <form
            className="p-8 bg-white shadow-md rounded"
            onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="text-xl text-left">Add a todo</h2>
            <Input type="text" className="p-2 mt-4 border rounded w-full" {...register('value')} />
            {errors.value && <span className="text-red-600"> {errors.value.message} </span>}
          </form>
        </div>
      </div>
    </div>
  );
};
