import React, { ChangeEvent } from 'react';

type ToDoProps = {
  checked: boolean;
  removeItem: () => void;
  setChecked: (checked: boolean) => void;
  text: string;
}

const ToDo = (props: ToDoProps) => {
  const { checked, removeItem, setChecked, text } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span style={{ margin: '0 16px' }}>{text}</span>
      <button onClick={removeItem}>REMOVE</button>
    </li>
  );
};

export default ToDo;
