import NewTask from './NewTask';

const Tasks = ({ tasks, addTask, deleteTask }) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-orange-700 mb-4'>TASKS</h2>
      <NewTask addTask={addTask} />
      {tasks.length === 0 && <p className='text-orange-800 my-4'>This project does not have any tasks.</p>}
      {tasks.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button className='text-orange-700 hover:text-red-500' onClick={() => deleteTask(task.id)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
