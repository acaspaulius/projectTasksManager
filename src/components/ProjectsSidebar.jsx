import Button from './Button';

const ProjectsSidebar = ({ startAddProject, projects, selectProject, selectedProjectId }) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-orange-900 text-orange-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-orange-200'>Your Projects</h2>
      <div>
        <Button onClick={startAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-orange-200 hover:bg-orange-800';

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-orange-800 text-orange-200';
          } else {
            cssClasses += ' text-orange-400 ';
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={() => selectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
