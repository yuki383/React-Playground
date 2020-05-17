import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState, isFilter } from "../store";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const udpateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isFilter(event.target.value)) {
      setFilter(event.target.value);
    }
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={udpateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
