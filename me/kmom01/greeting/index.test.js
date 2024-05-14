const greeting = require("./index.js");

test('Testing with Alice', () => {
  expect(greeting("Alice")).toBe("Hello Alice");
});

test('Testing with Bob', () => {
  expect(greeting("Bob")).toBe("Hello Bob");
});
