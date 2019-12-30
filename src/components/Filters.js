import React from 'react';

const Filters = props => {
  const { filter, setFilter } = props;

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
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
