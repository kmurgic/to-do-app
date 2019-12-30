import React, { useState } from 'react';

const ToDoAdder = props => {
  const { addToDo } = props;
  const [newToDo, setNewToDo] = useState('');

  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newToDo) return;
    addToDo(newToDo);
    setNewToDo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={newToDo}
      />
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default ToDoAdder;
