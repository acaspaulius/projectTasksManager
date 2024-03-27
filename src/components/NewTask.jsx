import { useState } from 'react';

const NewTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() === '') {
      return;
    }

    addTask(task);
    setTask('');
  };

  return (
    <div className='flex item-center gap-4'>
      <input
        type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none focus:outline-orange-600'
        onChange={handleChange}
        value={task}
      />
      <button className='text-orange-700 hover:text-orange-950' onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
