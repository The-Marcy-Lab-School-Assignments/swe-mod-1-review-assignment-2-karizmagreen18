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

PART A - 15 will appear in the console. This happens because playlist2 is assigned to playlist1. Since objects are reference types, both variables point to the same location in memory. As a result, when playlist2.songCount is changed to 15, the songCount property on playlist1 also reflects that change.

PART B - To prevent this, playlist2 should be created as a copy of playlist1 rather than referencing the original object. This ensures that changes to playlist2 do not affect playlist1.

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

he error happens because capitalize() is being run immediately instead of being passed into map as a callback. When capitalize() runs with no arguments, it returns undefined, and then map tries to use that undefined like it’s a function. The fix is just to remove the parentheses and pass the function reference instead: letters.map(capitalize). 

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
B. The 0 at the end of reduce is the initialValue for sum, which acts as the accumulator. It sets the starting point for the total. This matters because it ensures every element in the array gets processed in the calculation. If the initialValue isn’t included, the accumulator will automatically start as the first element of the array instead.
C. On the first pass of reduce, sum starts at 0 and order is 45. The function returns sum + order.total, which is 0 + 45. After that, sum becomes 45, and in the next iteration, it adds the total from the next order, continuing the accumulation.