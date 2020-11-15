import React, { useMemo, useState } from "react";
import { Form } from "./components/Form";

export const App: React.FC = () => {
  const [key, setKey] = useState(false);

  const changeKey = () => {
    setKey((prev) => !prev);
  };

  const child = useMemo(() => <CHild changeKey={changeKey} />, []);

  if (key) {
    return child
  }

  return <Wrap2>{child}</Wrap2>;
};

const CHild: React.FC<{ changeKey: () => void }> = (props) => {
  const getColor = () => Math.floor(Math.random() * 255);
  const color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;

  return (
    <div style={{ backgroundColor: color, padding: 20 }}>
      <button onClick={props.changeKey}>button</button>
    </div>
  );
};

const Wrap1: React.FC = (props) => {
  return (
    <div>
      <div>Wrap1</div>
      <div>{props.children}</div>
    </div>
  );
};

const Wrap2: React.FC = (props) => {
  return (
    <div>
      <div>Wrap2</div>
      <div>{props.children}</div>
    </div>
  );
};
