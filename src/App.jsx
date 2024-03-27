import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const addTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const deleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const selectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const startAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const cancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const addProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const deleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  };

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  const tasksForSelectedProject = projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject addProject={addProject} cancelAddProject={cancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected startAddProject={startAddProject} />;
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        deleteProject={deleteProject}
        addTask={addTask}
        deleteTask={deleteTask}
        tasks={tasksForSelectedProject}
      />
    );
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        startAddProject={startAddProject}
        projects={projectsState.projects}
        selectProject={selectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
