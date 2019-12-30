import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
  const { toDoItems, removeItem, setChecked } = props;
  return (
    <ul
      style={{ listStyleType: 'none', padding: 0 }}
    >
      {toDoItems.map(toDo => (
        <ToDo
          key={toDo.id}
          checked={toDo.checked}
          removeItem={removeItem(toDo.id)}
          setChecked={setChecked(toDo.id)}
          text={toDo.text}
        />
      ))}
    </ul>
  );
};


export default ToDoList;
