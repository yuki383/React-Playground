import { atom } from "recoil";

// eslint-disable-next-line no-unused-vars
import { Todo } from "~/types";

type Filters = "Show All" | "ShowCompleted" | "Show Uncompleted";

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All" as Filters,
});

export const todoListState = atom({
  key: "todoListState",
  default: [] as Todo[],
});
