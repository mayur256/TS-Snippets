# Arrow Functions
- Arrow function is yet another way to define functions in JS. In the previous post, we discussed two of most common ways to define functions in JS, but in this post we will discuss how **arrow functions** are somewhat analoguous to **Function expression**, but not **operationally identical**.
- They were introduced in **ECMAScript 6 (ES6)** and have since become a popular choice for defining functions in JavaScript due to their simplicity and readability.
- Basic Syntax
  ```
  const squared = [2,4,6].map(num => num * num);
  ```
- Here, instead of the function keyword, it uses an arrow **( => )** made up of an equal sign and a greater-than character.
- Arrow functions were introduced out of the necessity to be able to create small functions and later call them anywhere in the code, without having the need to retain their **contextual information**. They are heavily inspired from **lambda expressions**.
