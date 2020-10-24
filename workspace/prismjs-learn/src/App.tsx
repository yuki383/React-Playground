import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

export const App: React.FC = () => {
  const html = Prism.highlight(code, Prism.languages.tsx, "tsx");
  console.log(Prism.languages);

  return (
    <div>
      Hello!!!
      <div
        style={{ backgroundColor: "black" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

const code = `import React from "react";
export const App: React.FC = () => <div>Hello!</div>;
`;
