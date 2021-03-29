import React from 'react';

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Set Reminder</label>
        <input type='checkbox' placeholder='Add Task' />
      </div>
      <input type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
