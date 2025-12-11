# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?
both playlist 2 and 1 will have the value of 15 because playlist2 is not copied and they reference the same object in memory.

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

I would use rest parameters for playlist1 where playlist2 is being assigned to be equal to playlist 1

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true },
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85. // filter
2. You need to find the student named "Destiny" and update their grade to 90. // find
3. You need to calculate the average grade of all students. // reduce
4. You need to create an array of strings in the format: "Maya: 92" // forEach

### Response 2

students.filter
students.find
students.reduce
students.forEach

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ["a", "b", "c", "d"];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

// used chatGPT to grammar correct and it changed some of my answer

Because the capitalize() function is called without any argument, it cannot reference the values in the letters array. To fix this, you need to use the correct syntax for the .map() method by passing the function reference instead of calling the function directly. To avoid this error in the future, make sure to use the proper .map() syntax and pass function references when appropriate.

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 },
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
  - What is the value of sum?
  - What is the value of order?
  - What gets returned?

### Response 4

A. 135
B. a starting value for the reduce method
C.
- 0
- 45
- the total of all orders is summed together.
