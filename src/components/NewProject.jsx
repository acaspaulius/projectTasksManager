import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ addProject, cancelAddProject }) => {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const save = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
      modal.current.open();
      return;
    }

    addProject({
      title: title,
      description: description,
      dueDate: dueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-orange-700 my-4'>Invalid Input</h2>
        <p className='text-orange-600 mb-4'> Looks like you forgot to enter a value.</p>
        <p className='text-orange-600 mb-4'>Please make sure you provide valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <div>
          <Input type='text' ref={titleRef} label='Title' />
          <Input ref={descriptionRef} label='Description' textarea />
          <Input type='date' ref={dueDateRef} label='Due Date' />
        </div>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-orange-800 hover:text-orange-950' onClick={cancelAddProject}>
              Cancel
            </button>
          </li>
          <li>
            <button className='bg-orange-800 text-orange-50 hover:bg-orange-950 px-6 py-2 rounded-md' onClick={save}>
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default NewProject;
