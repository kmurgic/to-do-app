import React from 'react';
import ToDo from './ToDo';
import { ToDoType } from './App';

type ToDoListProps = {
  toDoItems: Array<ToDoType>;
  removeItem: (id: number) => () => void;
  setChecked: (id: number) => (checked: boolean) => void;
}

const ToDoList = (props: ToDoListProps) => {
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
