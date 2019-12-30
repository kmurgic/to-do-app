import React from 'react';

const ToDo = props => {
  const { checked, removeItem, setChecked, text } = props;
  const handleChange = (e) => {
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
