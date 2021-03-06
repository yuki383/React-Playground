import React from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import { filteredTodoListState } from "~/store";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoItem } from "./components/TodoItem";
import { TodoListFilters } from "./components/TodoListFilters";
import { TodoListStats } from "./components/TodoListStats";
import { Test } from "./TestRecoil";

export const App = () => {
  return (
    <RecoilRoot>
      {/* <TodoList /> */}
      <Test />
    </RecoilRoot>
  );
};

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};
