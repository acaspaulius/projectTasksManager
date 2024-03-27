import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({ startAddProject }) => {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={noProjectImage} alt='Empty task list' className='w-16 h-16 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-orange-500 my-4'>No Project Selected</h2>
      <p className='text-orange-400 mb-4'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={startAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
