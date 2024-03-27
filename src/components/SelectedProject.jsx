import Tasks from './Tasks';

const SelectedProject = ({ project, deleteProject, addTask, deleteTask, tasks }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className='w-[35rem] mt-16'>
      <section className='pb-4 mb-4 border-b-2 border-orange-300'>
        <div className='flex item-center justify-between'>
          <h1 className='text-3xl font-bold text-orange-600 mb-2'>{project.title}</h1>
          <button className='text-orange-600 hover:text-orange-950' onClick={deleteProject}>
            Delete
          </button>
        </div>
        <p className='mb-4 text-orange-400'>{formattedDate}</p>
        <p className='text-orange-600 whitespace-pre-wrap'>{project.description}</p>
      </section>
      <Tasks addTask={addTask} deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;
