import React, { useState } from "react";

export const App: React.FC = () => {
  const [clicked, changeClicked] = useState(false);
  const label = clicked ? "clicked!" : "click me!";

  return <button onClick={() => changeClicked(prev => !prev)}>{label}</button>;
};
