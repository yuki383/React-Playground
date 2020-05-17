import { atom, selector } from "recoil";
import { Todo } from "~/types";

export type Filters = "Show All" | "Show Completed" | "Show Uncompleted";

export const isFilter = (obj: any): obj is Filters => {
  return (
    obj === "Show All" || obj === "Show Completed" || obj === "Show Uncompleted"
  );
};

export const todoListState = atom({
  key: "todoListState",
  default: [] as Todo[],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All" as Filters,
});

export const filteredTodoListState = selector({
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

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
