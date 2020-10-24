import Prism from "prismjs";

const code = `const fruit = "Banana";
console.log(\`I love \${fruit}!);
`;

describe("App", () => {
  const env = {
    code,
    grammar: Prism.languages.javascript,
    language: "javascript",
    tokens: undefined,
  } as any;

  test("hogefuga", () => {
    // Prism.hooks.run("before-tokenize", env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    // Prism.hooks.run("after-tokenize", env);
    expect(
      Prism.Token.stringify(Prism.util.encode(env.tokens), env.language),
    ).toBe("hoge");
  });
});
