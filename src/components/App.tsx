import React, { useState } from 'react';
import ToDoAdder from './ToDoAdder';
import ToDoList from './ToDoList';
import Filters from './Filters';

export type Filter = 'ALL' | 'COMPLETED' | 'INCOMPLETE';

export type ToDoType = {
  id: number;
  checked: boolean;
  text: string;
};

const App = () => {
  const [toDoItems, setTodoItems] = useState<ToDoType[]>([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState<Filter>('ALL');

  let filteredToDoItems: Array<ToDoType> = [];
  if (filter === 'ALL') filteredToDoItems = toDoItems;
  if (filter === 'COMPLETED') filteredToDoItems = toDoItems.filter(
    item => item.checked
  )
  if (filter === 'INCOMPLETE') filteredToDoItems = toDoItems.filter(
    item => !item.checked
  )

  const addToDo = (newToDo: string) => {
    const newToDoItem = {
      id: nextId,
      checked: false,
      text: newToDo,
    };
    setTodoItems(prevToDoItems => [...prevToDoItems, newToDoItem]);
    setNextId(prevNextId => prevNextId + 1);
  };

  const removeItem = (id: number) => () => {
    const getNewToDoItems = (prevToDoItems: Array<ToDoType>) => prevToDoItems.filter(
      item => item.id !== id
    );
    setTodoItems(prevToDoItems => getNewToDoItems(prevToDoItems));
  };

  const setChecked = (id: number) => (checked: boolean) => {
    const getNewToDoItems = (prevToDoItems: Array<ToDoType>) => prevToDoItems.map(
      item => {
        if (item.id === id) return { ...item, checked };
        return item;
      }
    );
    setTodoItems(prevToDoItems => getNewToDoItems(prevToDoItems));
  };

  return (
    <div className="App">
      <h1>Simple To-Do App</h1>
      <ToDoAdder
        addToDo={addToDo}
      />
      {!filteredToDoItems.length && <p>No to-do items to display.</p>}
      <ToDoList
        toDoItems={filteredToDoItems}
        removeItem={removeItem}
        setChecked={setChecked}
      />
      <Filters
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
