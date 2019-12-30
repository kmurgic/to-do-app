import React, { useState, ChangeEvent, FormEvent } from 'react';

type ToDoAdderProps = {
  addToDo: (newToDo: string) => void;
}

const ToDoAdder = (props: ToDoAdderProps) => {
  const { addToDo } = props;
  const [newToDo, setNewToDo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
