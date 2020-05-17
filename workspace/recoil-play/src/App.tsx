import React from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import { todoListState } from "~/store";
// eslint-disable-next-line no-unused-vars
import { Todo } from "~/types";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoItem } from "./components/TodoItem";

export const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      {todoList.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};
