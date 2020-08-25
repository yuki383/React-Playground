import React from "react";
import ReactMarkdown from "react-markdown";

export const App: React.FC = () => {
  return (
    <div>
      <ReactMarkdown source={md} />
    </div>
  );
};

const md = `
# Post!

It is normal text.

\`\`\`javascript
console.log("It is Code Highlight");
\`\`\`
`;
