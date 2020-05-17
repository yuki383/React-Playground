import { atom, selector } from "recoil";
import { Todo } from "~/types";

type Filters = "Show All" | "Show Completed" | "Show Uncompleted";

export const todoListState = atom({
  key: "todoListState",
  default: [] as Todo[],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All" as Filters,
});

export const filterTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter(item => item.isComplete);
      case "Show Uncompleted":
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
});
