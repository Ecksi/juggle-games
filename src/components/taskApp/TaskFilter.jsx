import { useState } from "react";

export default function TaskFilter({ filterTasks }) {
  const [activeFilter, setActiveFilter] = useState("all");

  function filterBy(e) {
    setActiveFilter(() => e.target.innerText.toLowerCase());
    filterTasks(e.target.innerText.toLowerCase());
  }

  return (
    <div className="task-filter">
      <h4 style={{ marginBottom: 0 }}>Filter by:</h4>
      <ol className="task-filter-types">
        <li
          onClick={filterBy}
          className={activeFilter === "high-priority" ? activeFilter : undefined}
        >
          High-Priority
        </li>
        <li
          onClick={filterBy}
          className={activeFilter === "incomplete" ? activeFilter : undefined}
        >
          Incomplete
        </li>
        <li
          onClick={filterBy}
          className={activeFilter === "complete" ? activeFilter : undefined}
        >
          Complete
        </li>
        <li
          onClick={filterBy}
          className={activeFilter === "all" ? activeFilter : undefined}
        >
          All
        </li>
      </ol>
    </div>
  );
}
