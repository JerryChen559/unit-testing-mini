const functions = require("./functions");

test("returnTwo() should return 2.", () => {
  expect(functions.returnTwo()).toEqual(2);
});

test("greeting() should return a dynamic greeting based on name ", () => {
  expect(functions.greeting("Tim")).toEqual("Hello, Tim!");
  expect(functions.greeting("Spencer")).toEqual("Hello, Spencer!");
});

test("add() should return the sum of two parameters.", () => {
  expect(functions.add(3, 5)).toEqual(8);
  expect(functions.add(6, 1)).toEqual(7);
  expect(functions.add(11, 4)).toEqual(15);
});
