import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../store";

let id = 0;
const getID = () => {
  return id++;
};

export const TodoItemCreator = () => {
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
