import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/Input';

//dodati react hook form
//dodati zod schema validator
//refaktorisati input tako da mogu proslijediti sve propertije inputa

//nova komponenta ide uvijek novi fajl, u folder ui(button i input)
//isto uraditi input ko button
//procitati sta je forwardRef i ref
//pokazati rjesenje bez forwardRef-a
//konfigurisati eslint
//dodati react context i postaviti temu dark na button preko tailwinda i css varijabli
//prije contexta commitati

// const Input = forwardRef(({ type, className, ...props }, ref) => {
//   return <input type={type} className={className} {...props} ref={ref} />;
// });

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
