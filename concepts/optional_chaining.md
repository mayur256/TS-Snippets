# Optional chaining
- The optional chaining is a special **language construct** in Javascript that can help us avoid runtime errors caused due to _nullish_ variable or reference access.
- It was introduced as a means to safely access **"non-existent"** property along the chain of properties in a nested object.
- Generally accessing a non-existent reference looks something like this
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/057208bb-a29d-403b-ae9f-c8f885a3648e" width="1000" />

- This seemingly trivial error can break critical app flow in production (not a desirable situation). For e.g this error can causes your pages to go blank in a **React** or other browser applications if it occurs just before _rendering_.

## Solution
- To overcome this and to access or assign a value safely for a **non-existent** property in an expression we do something like this
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/eb9bc53a-a938-4904-877f-458be61a74a3" width="1000" />

- A better alternative to the above solution is the following snippet as it is terse
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/c350e954-7564-4ee7-9fd1-e801ba566bed" width="1000" />

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
<img src="https://github.com/mayur256/TS-Snippets/assets/39913092/d233adca-42e6-4c22-8950-024dd4c6d431" width="1000" />
