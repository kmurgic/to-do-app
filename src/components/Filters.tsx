import React, { ChangeEvent } from 'react';
import { Filter } from './App';

type FiltersProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const Filters = (props: FiltersProps) => {
  const { filter, setFilter } = props;

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const filters: Array<Filter> = ['ALL', 'COMPLETED', 'INCOMPLETE'];
    const newFilter: Filter = filters.find(filter => filter === e.currentTarget.value) || 'ALL';
    setFilter(newFilter);
  };
  return (
    <div>
      <span style={{ marginRight: 8 }}>SHOW</span>
      <select onChange={handleFilterChange} value={filter}>
        <option value="ALL">ALL</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="INCOMPLETE">INCOMPLETE</option>
      </select>
    </div>
  )
}

export default Filters;
