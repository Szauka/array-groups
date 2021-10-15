const groupArrayElements = require('./group-array');

test('when array empty should throw error', () => {
  let initialArray = [];

  expect(() => groupArrayElements(initialArray, 3)).toThrow('The array must have at least one element');
});

test('N is negative should throw error', () => {
  let initialArray = [1];

  expect(() => groupArrayElements(initialArray, -2)).toThrow();
});

test('should return 3 equally sized arrays', () => {
  let initialArray = [1, 2, 3, 4, 5, 6];

  let result = groupArrayElements(initialArray, 3);

  expect(result.length).toBe(3);
  expect(result[1].length).toBe(2);
});

test('should return 1 array', () => {
  let initialArray = [1, 2, 3, 4, 5, 6];

  let result = groupArrayElements(initialArray, 1);

  expect(result.length).toBe(1);
  expect(result[0].length).toBe(6);
});

test('should return 3 arrays, the first two should have a length of 2 and the last one should contain one element', () => {
  let initialArray = [1, 2, 3, 4, 5];

  let result = groupArrayElements(initialArray, 3);

  expect(result.length).toBe(3);

  expect(result[0].length).toBe(2);
  expect(result[1].length).toBe(2);
  expect(result[2].length).toBe(1);
});


test('should return 4 arrays, last array should contain 5 elements', () => {
  let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  let result = groupArrayElements(initialArray, 4);

  expect(result.length).toBe(4);

  expect(result[0].length).toBe(4);
  expect(result[3].length).toBe(5);
});

test('should return 2 arrays, last array should contain 9 elements', () => {
  let initialArray = [1, 2, 3, 4, 5, 6, 7];

  let result = groupArrayElements(initialArray, 2);

  expect(result.length).toBe(2);

  expect(result[0].length).toBe(3);
  expect(result[1].length).toBe(4);
});

test('should return 7 groups, each group should a length of 5 and the last group a length of 4', () => {
  let initialArray = new Array(34);
  initialArray.fill(Math.random());

  let result = groupArrayElements(initialArray, 7);

  expect(result.length).toBe(7);

  expect(result[0].length).toBe(5);
  expect(result[6].length).toBe(4);
});
