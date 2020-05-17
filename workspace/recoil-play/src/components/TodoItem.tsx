import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../store";
// eslint-disable-next-line no-unused-vars
import { Todo } from "~/types";

export const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = deleteItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

const replaceItemAtIndex = <T extends any>(
  arr: T[],
  index: number,
  newValue: T,
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const deleteItemAtIndex = <T extends any>(arr: T[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
