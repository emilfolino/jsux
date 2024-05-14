const greeting = require("./index.js");

test('Testing with Cyrus', () => {
  expect(greeting("Cyrus")).toBe("Hello Cyrus");
});

test('Testing with Diana', () => {
  expect(greeting("Diana")).toBe("Hello Diana");
});
