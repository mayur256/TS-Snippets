# What's a function?
- A function is a piece of code that is stored and executed on-demand. Ofcourse it goes without saying `Functions are the building blocks of any program`.

# Function Declaration
- **Function declaration** is a special statement in JS that creates a references to a *Function* object pointing to a section of code, that is independent, flexible, consistent and callable.
- Not to mention the fact that it makes a program impervious to *code duplication*.
- It's Syntax goes something like this
- ```
  function name(parameter1, parameter2, ... parameterN) {
   // body / logic
  }
  ```

- Here the **function** keyword precedes any *valid JS identifier* that can be used to invoke this function by appending the parenthesis `()` operator.

# Function Expression
- Unlike other languages, a function in JS is not a special construct, rather a special kind of value irrespective of the fact how it is created.
- Syntax for creating a function expression
```
const functionName = function() {
  // function body
}
```
- In the above statement, a function is created as a **value** with expression in LHS and is assigned to variable **functionName**.
- Now since the function and its binding is created in the context of an assignment, this form is called as *_Function Expression_*.

# Function Declaration vs Function Expression
- Apart from the obvious syntactical differences, following are the key distinguishing factors
  1. Function declarations are *hosited* while Function expressions are not. Invoking a Function expression before it is defined, will throw a **ReferenceError**.
     ```
     sayHello() // this works
     
     function sayHello () {
       console.log('Hello Function Declaration!');
     }
     ```
     ```
     sayHello () // this doesn't work
     
     const sayHello = function () {
       console.log('Hello Function Expression!');
     }

     sayHello() // this works
     ```
  3. Function expression should almost always be defined in assignment statement (There are exceptions to this). Function declaration can defined in a standalone statement.
  4. Function expression is only available to a JS interpreter from the moment it is defined. On the contrary Function declaration can be accessed from anywhere within the code block.
