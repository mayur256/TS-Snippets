# Optional chaining
- The optional chaining is a special **language construct** in Javascript that can help us avoid runtime errors caused due to _nullish_ variable or reference access.
- It was introduced as a means to safely access **"non-existent"** property along the chain of properties in a nested object.
- Generally accessing a non-existent reference looks something like this
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/057208bb-a29d-403b-ae9f-c8f885a3648e" width="1000" />

- This seemingly trivial error can break critical app flow in production (not a desirable situation). For e.g this error can causes your pages to go blank in a **React** or other browser applications if it occurs just before _rendering_.

## Solution
- To overcome this (issue in previous section) and to access or assign a value safely for a **non-existent** property in an expression we do something like this
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/650f3d13-72d6-4fc0-a63a-2036ca8f8292" width="1000" />

- A better alternative to the above solution is the following snippet as it is terse
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/39024843-9b78-4f2a-b438-a7fed9afa5be" width="1000" />

## Short ciruiting
- **Short circuiting** is a form of expression evaluation in which the expression returns quickly with a result on encountering the first falsy value
- **_Optional chaining_** can be used to short-circuit flaky expressions in JS, since it immediately stops its evaluation on the encounter of a nullish reference and returns **undefined** as a result
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/7d112ba5-78e6-4a55-83f6-810bf3e0b193" width="1000" />

## Variants of Optional Chaining operator
- Following are the different variants in which this operator can be used in Javascript
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/fe549920-106d-4e98-b342-827e57efd6ff" width="1000" />

## Caveats
- The _optional chaining_ operator should not be overused. Objects with nullish props must be identified and resolved to avoid any unknown errors.
- It cannot be used in **L.H.S** of an assignment statement.
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/e9f27b0a-0e5c-4dc1-b380-59b0878eda8d" width="1000" />

