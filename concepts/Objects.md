# Objects
- Like every other language, Objects in Javascript are the most crucial entities and are the basic building blocks.
- Objects in JS are of the **reference types**, meaning whenever an object is **referenced** like passing it to a function as an argument, or assigning it to an identifier, it's done by accessing it's **address** in the memory.
- Objects are a **keyed** collection of heterogeneous data.
- Objects in JS are more than just keyed collection, they are the backbones behind the meticulous mechanism that is responsible for driving states of the most sophisticated application that run on the browser or on server.

## Object creation variants

1. **_Object Literals_ (Plain Objects)**
    - This form involves enumerating a list of properties wither their values separated by a colon `:` within `{}` curly brackets and assigns it to an identifier.
```
const car = {
  name: 'Renault',
  color: 'Black'
}
```

2. **_Constructor Functions_**
    - We can use **function declarations** to create objects by leveraging **this** keyword.

```
// works as a model to derive instances
function Car(name, color) {
  this.name = name;
  this.color = color;
}
// Instances
const car1 = new Car('Ferrari', 'Red');
const car2 = new Car('Aston Martin', 'Turquoise');
```

3. **_Object.create() method_**
   - The **static** method of Object can also be used to create objects from a **prototype**.
```
const vehicle = { mileage: 40 };

const car = Object.create(vehicle);
car.name = 'Renault';
car.color = 'Red';
console.log(car.name, car.color, car.mileage); // prints 'Renault' 'Red' 40
```

4. **_ES6 Class_**
    - Modern Javascript provides class definition as a blueprint for defining objects.
```
class Car {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
}

// Instances based on `Car` class
const car1 = new Car('Ferrari', 'Red');
const car2 = new Car('Aston Martin', 'Turquoise');
```

## Properties and Methods
- Properties can be accessed with **period or subscript** operators.
```
const car = { name: 'Renault' };
car.name; // dot operator access resolves to 'Renault'
car['model number'] = 'XYZ'; // square brackets allows to have any string as property 
```
- Methods are basically properties whose value is a function. It is recommended to use **function expressions** for methods, as they retain proper value for **this** keyword.
```
const car = { name: 'Renault', getName: function() { return this.name } };
car.getName(); // resolves to 'Renault'
```

## Computed Properties
- Square bracket syntax can also be extended to have dynamic properties for an object. Property key can be specified with a variable and can be evaluated at run-time.
```
const car = { name: 'Renault' };
const dynamicProp = 'model year';
car[dynamicProp] = 2020
console.log(car); // prints { "name": "Renault", "model year": 2020 }
```

## Ways to clone an Object
- Object cloning is a non-trivial activity that we often perform in our applications to manipulate and maintain states.
- As we know that objects in Javascript are of the reference type, so simply assigning the object to new variable doesn't create a clone of it.

  ```
  const user = {name: 'John Doe'};
  const person = user; // this doesn't create a clone, but a new reference to the existing object
  person.name = 'Alice'; // updates the contents of object
  console.log(user.name) // Alice
  ```
- In this thread we will be exploring few, but prevalent and standard ways to clone objects.
### 1. Object.assign
- assign is a static method of the Object type that copies properties from one or more source objects into a target object and returns it.
- It's syntax goes like this
  ```
  const cloned = Object.assign(target, source1, source2, ... , sourceN);
  ```
  ```
  const user = {
      name: 'John Doe',
      age: 23
  };
  const clonedUser = Object.assign({}, user);
  console.log(clonedUser); // Object { name: "John Doe", age: 23 }
  ```
