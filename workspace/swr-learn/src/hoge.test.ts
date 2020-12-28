import { format } from "./hoge";

test('unix timeを"YYYY/M/D"の形式にフォーマットする', () => {
  const time = new Date("2020-11-1").getTime() / 1000;

  expect(format(time)).toBe("2020/11/1");
});
