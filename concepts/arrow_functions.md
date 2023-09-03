# Arrow Functions
- Arrow function is yet another way to define functions in JS. In the previous post, we discussed two of most common ways to define functions in JS, but in this post we will discuss how **arrow functions** are somewhat analoguous to **Function expression**, but not **operationally identical**.
- They were introduced in **ECMAScript 6 (ES6)** and have since become a popular choice for defining functions in JavaScript due to their simplicity and readability.
- Basic Syntax
  ```
  const squared = [2,4,6].map(num => num * num);
  ```
- Here, instead of the function keyword, it uses an arrow **( => )** made up of an equal sign and a greater-than character.
- Arrow functions were introduced out of the necessity to be able to create small functions and later call them anywhere in the code, without having the need to retain their **contextual information**. They are heavily inspired from **lambda expressions**.

## Syntactical variants
### Implicit Return
- The most concise syntax for arrow function involves an expression with zero or more parameters with a function body of single line that does not explicitly require a *return* statement.
```
// No need to write return keyword if the function body consists of a single line.
// Also we can skip enclosing curly brackets 
// No need to add parenthesis around list of parameters if it's singular
const logOf = number => Math.log(number);

// parenthesis for multiple parameters
const sum = (x,y) => x+y;
```

### Multiline line arrow function (with explicit return)
```
// arrow functions with multiline body use return keyword and enclosing brackets
const sum = (x, y) => {
  const result = x + y;
  return result;
}
```
## Limitations and other characteristics
### No binding for *this* keyword
- Unlike Function declaration and expression, there is binding assigned for **this** keyword inside arrow functions at runtime
- It inherits the value for it from enclosing environment.
```
// With function expression
const person = {
  name: 'John Doe',
  age: 19,
  displayAge: function () {
    console.log(this.age);
  },
}

console.log(person.displayAge()) // prints 19
```

```
// With arrow function expression
const person = {
  name: 'John Doe',
  age: 19,
  displayAge: () => {
    console.log(this.age);
  },
}

console.log(person.displayAge()) // prints undefined
```

### No binding for *arguments* keyword as well
```
// With function expression
const displayArgs = function () {
  return arguments;
}
console.log(displayArgs([1,2,3])); // prints [1,2,3];
```

```
// With arrow functions
const displayArgs = () => arguments;
console.log(displayArgs([1,2,3])); // Uncaught ReferenceError: arguments is not defined
```

### Can't be used as *constructors*
- Since arrow functions don't have their own context and bindings for ***this*** variable, it can't be used as **constructor**.
```
// With function declaration
function User(name, age) {
  this.name = name;
  this.age = age;
};
const per1 = new User('Max Plank', 64);
```

```
// With arrow expression
const User = (name, age) => {
  this.name = name;
  this.age = age;
}

// Uncaught TypeError: User is not a constructor
const per1 = new User('Max Plank', 64);
```

### No access to *super* keyword in *class* constructor
