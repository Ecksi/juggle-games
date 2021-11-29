import React, { useState } from "react";

export default function TodoFilter({ filterTodos }) {
  const [activeFilter, setActiveFilter] = useState('all');

  function filterBy(e) {
    setActiveFilter(() => e.target.innerText.toLowerCase())
    filterTodos(e.target.innerText.toLowerCase())
  }

  return (
    <div className="todo-filter">
      <h4 style={{ marginBottom: 0 }}>Filter by:</h4>
      <ol className="todo-filter-types">
        <li onClick={filterBy} style={{fontWeight: activeFilter === 'high-priority' ? 'bold' : 'normal'}}>High-Priority</li>
        <li onClick={filterBy} style={{fontWeight: activeFilter === 'incomplete' ? 'bold' : 'normal'}}>Incomplete</li>
        <li onClick={filterBy} style={{fontWeight: activeFilter === 'complete' ? 'bold' : 'normal'}}>Complete</li>
        <li onClick={filterBy} style={{fontWeight: activeFilter === 'all' ? 'bold' : 'normal'}}>All</li>
      </ol>
    </div>
  )
}
