import React, { useState } from 'react';
import ToDoAdder from './ToDoAdder';
import ToDoList from './ToDoList';
import Filters from './Filters';

const App = () => {
  const [toDoItems, setTodoItems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState('ALL');

  let filteredToDoItems = [];
  if (filter === 'ALL') filteredToDoItems = toDoItems;
  if (filter === 'COMPLETED') filteredToDoItems = toDoItems.filter(
    item => item.checked
  )
  if (filter === 'INCOMPLETE') filteredToDoItems = toDoItems.filter(
    item => !item.checked
  )

  const addToDo = (newToDo) => {
    const newToDoItem = {
      id: nextId,
      checked: false,
      text: newToDo,
    };
    setTodoItems(prevToDoItems => [...prevToDoItems, newToDoItem]);
    setNextId(prevNextId => prevNextId + 1);
  };

  const removeItem = (id) => () => {
    const getNewToDoItems = (prevToDoItems) => prevToDoItems.filter(
      item => item.id !== id
    );
    setTodoItems(prevToDoItems => getNewToDoItems(prevToDoItems));
  };

  const setChecked = (id) => (checked) => {
    const getNewToDoItems = (prevToDoItems) => prevToDoItems.map(
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
