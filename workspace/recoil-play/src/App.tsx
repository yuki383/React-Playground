import React, { useState } from "react";
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  RecoilRoot,
} from "recoil";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

const todoListState = atom({
  key: "todoListState",
  default: [] as Todo[],
});

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

type hoge = (oldTodoList: Todo[]) => Todo[];

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getID(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
const getID = () => {
  return id++;
};

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
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

  console.log("item", item);
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
