import React from "react";

import { Form } from "./javaScript.styles";

const JavaScriptQuestions = [
  {
    question: "What is event delagation?",
    answer:
      "JavaScript event listeners fires not only on a single DOM element but on all its descendants",
    example: (
      <Form onClick={() => alert(`EventListener attached on form only`)}>
        Form - Click Me
        <div>
          Div - Click Me
          <p>P - Click Me</p>
        </div>
      </Form>
    ),
  },
  {
    question: "Explain event bubbling.",
    answer:
      "Inverse of delegation, also know as Propogations. Events on an element will bubble up and also fire on all parents",
  },
  {
    question: "What is the difference between target and currentTarget?",
    answer:
      "- target = the element that triggered the event \n- currentTarget = the element that the event listener is attached to",
  },
  {
    question: "What does IIFE mean?",
    answer: "Immediately invoked function expression",
  },
  {
    question: "What is the purpose of an IIFE",
    answer: "Control variable scope",
    example: "(()=>/* do something */)",
  },
  {
    question: "What is the difference between an expression and a statement",
    answer:
      "- expression: is any valid unit that resolves to a value \n- statement: stands for anything that performs an action",
  },
  {
    question:
      "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer: "- Reduces collision\n- Maintain independence",
  },
  {
    question: "Explain hoisting",
    answer:
      "Hosting happens, if a variable is only declared and not initialized",
    example: `var s = "hallo" // globale Variable\nfunction foo(){
      document.write(s); // undefined
      var s = "test"; 
      document.write(s); // s = "test" 
    }
    
what happend:

var s = "hallo"; 
function foo() {
    var s; //hoisted
    document.write(s); 
    s = "test";
    document.write(s); 
  }`,
  },
  {
    question:
      "Whats the difference between a variable that is: null, undefined or undeclared?",
    answer:
      "- null: is a value, a 'nothing' value\n- undefined: a variable thats only declared\n- undeclared: a variable that isnt existing",
  },
  {
    question:
      "How would you go about checking for null, undefined or undeclared?",
    answer:
      "-for the first two a triple sign(===) will do the job (carefull if you use typeof, because null is a object and undefined is a string)\n- undeclared will find you",
  },
  {
    question: "Whats the difference between == and ===?",
    answer:
      "- == is used for comparison between two variables irrespective of the datatype of variable\n- === is used for comparision between two variables but this will check strict type, which means it will",
  },
  {
    question: "Explain how 'this' works in one scenario",
    answer: `- If the new keyword is used when calling the function, this inside the function is a brand new object.

- If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

- If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

- If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

- If multiple of the above rules apply, the rule that is higher wins and will set the this value.

- If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.
`,
  },
  {
    question: "Explain how prototypal inheritance works",
    answer:
      "So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties.",
    example: ` function Dog() {
  }
  Dog.prototype.bark = function() {
    console.log(‘woof!’);
  };
  var fido = new Dog();
  fido.bark(); // ‘woof!’`,
  },
  {
    question: "What is a closure, and how/why would you use one?",
    answer:
      "Same as the IIFE, you can use closure to make elements private\n-also closures are just functions with preserved data",
    example: `var add = function(passed){
        var addInner = function(inner){
            return passed + inner;
  }
     return add;
  }
  
  var addThree = new add(3);  //addThree(1) => add 3 to 1
  var addFour = new add(4);   //addFour(1) => add 4 to 1

  function add(x){
    return function adder(y){
      if(y == undefined) return x;
      else{
        x += y;
        return adder;
      }
    }
  }

  add(1)(2)(3)() => 6

  `,
  },
  {
    question:
      "What language constructions do you use for iterating over object properties and array items?",
    answer: `- For objects:
    • for-in loops - for (var property in obj) { console.log(property); }.
    However, this will also iterate through its inherited properties, and
    you will add an obj.hasOwnProperty(property) check before using it.

    • Object.keys() - Object.keys(obj).forEach(function (property) { ... }).
    Object.keys() is a static method that will lists all enumerable
    properties of the object that you pass it.

    • Object.getOwnPropertyNames() -
    Object.getOwnPropertyNames(obj).forEach(function (property) { ... }).
    Object.getOwnPropertyNames() is a static method that will lists all
    enumerable and non-enumerable properties of the object that you pass it.
    
- For arrays:
    • for loops - for (var i = 0; i < arr.length; i++). The
    common pitfall here is that var is in the function scope and not the
    block scope and most of the time you would want block scoped iterator
    variable. ES2015 introduces let which has block scope and it is
    recommended to use that instead. So this becomes: for (let i = 0; i <
    arr.length; i++).
    
    • forEach - arr.forEach(function (el, index) { ... }).
    This construct can be more convenient at times because you do not have
    to use the index if all you need is the array elements. There are also
    the every and some methods which will allow you to terminate the
    iteration early. 
    
    • for-of loops - for (let elem of arr) { ... }. ES6
    introduces a new loop, the for-of loop, that allows you to loop over
    objects that conform to the iterable protocol such as String, Array,
    Map, Set, etc. It combines the advantages of the for loop and the
    forEach() method. The advantage of the for loop is that you can break
    from it, and the advantage of forEach() is that it is more concise than
    the for loop because you don't need a counter variable. With the for-of
    loop, you get both the ability to break from a loop and a more concise
    syntax.`,
  },
  {
    question:
      "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer: `- forEach:
    • Iterates through the elements in an array.
    • Executes a callback for each element.
    • Does not return a value.
  
- map
    • Iterates through the elements in an array.
    • "Maps" each element to a new element by calling the function on each 
    element, creating a new array as a result.
  
The main difference between .forEach and .map() is that .map() returns a new array.`,
  },
  {
    question: "What's a typical use case for anonymous functions?",
    answer: `- They can be used in IIFEs to encapsulate somwithin a local scope so that variables declared in it do not leak to the global scope.

- As a callback that is used once and does not need to be used anywhere else. They will seem more self-contained and readable when handlers are defined right inside them, rather than having to search elsewhere to find the function body.

- Arguments to functional programming constructs or Lodash (similar to callbacks).`,
  },
  {
    question: "What's the difference between host objects and native objects?",
    answer: `- Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
    
 - Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.`,
  },
  {
    question:
      "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
    answer: `- function Person(){} is just a normal function declaration

- var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor.

- var person = new Person() creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype).`,
  },
  {
    question:
      "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
    answer: `- The first one is a function declaration while the other is a function expression. The key difference is that function declarations have its body hoisted but the bodies of function expressions are not.`,
  },
  {
    question: "What's the difference between .call and .apply?",
    answer: `- Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.`,
  },
  {
    question: "Explain Function.prototype.bind",
    answer: `- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.`,
  },
  {
    question: "Describe event capturing",
    answer: `Capturing, the event is first captured by the outermost element and propagated to the inner elements.`,
  },
  {
    question: "What's the difference between an attribute and a property?",
    answer: `- Attributes are defined on the HTML markup but properties are defined on the DOM.

  - So if you want to know what's currently inside the text-box, read the property. If you, however, want to know what the initial value of the text-box was, read the attribute.`,
  },
  {
    question: "Why is extending built-in JavaScript objects not a good idea?",
    answer: `- i.e. because two methods trying to overwrite each other and if the behaviors are not the same, so it breaks
    
- The only time you may want to extend a native object is when you want to create a polyfill, essentially providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.`,
  },
  {
    question: "Explain the same-origin policy with regards to JavaScript.",
    answer: `- The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.`,
  },
  {
    question: "What tools and techniques do you use for debugging JavaScript?",
    answer: `- ChromeDevTools

- Good old console.log debugging`,
  },
  {
    question:
      "Explain the difference between synchronous and asynchronous functions",
    answer: `- Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run.
    
 - Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty.`,
  },
  {
    question:
      "What is event loop? What is the difference between call stack and task queue?",
    answer:
      "The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.",
  },
  {
    question:
      "What are the differences between variables created using let, var or const?",
    answer:
      "- Variables declared using the var keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. let and const are block scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).",
  },
  {
    question:
      "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    answer:
      "- One obvious benefit of arrow functions is to simplify the syntax needed to create functions, without a need for the function keyword. The this within arrow functions is also bound to the enclosing scope which is different compared to regular functions where the this is determined by the object calling it. Lexically-scoped this is useful when invoking callbacks especially in React components.",
  },
  {
    question:
      "What advantages offers the arrow syntax for a method in a constructor?",
    answer:
      "- The main advantage of using an arrow function as a method inside a constructor is that the value of this gets set at the time of the function creation and can't change after that. So, when the constructor is used to create a new object, this will always refer to that object.",
    example: `const Person = function(firstName) {
  this.firstName = firstName;
  this.sayName1 = function() { console.log(this.firstName); };
  this.sayName2 = () => { console.log(this.firstName); };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can change the value, but the arrow function cannot
john.sayName1.call(dave); // Dave (because "this" is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because 'this' is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because 'this' is now the dave object)
john.sayName2.bind(dave)(); // John

var sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); // undefined (because 'this' is now the window object)

var sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); // John`,
  },
  {
    question:
      "Can you give an example for destructuring an object or an array?",
    answer:
      "- Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.",
    example: ` Array destructuring

  // Variable assignment.
  const foo = ['one', 'two', 'three'];

  const [one, two, three] = foo;
  console.log(one); // "one"
  console.log(two); // "two"
  console.log(three); // "three"

  // Swapping variables
  let a = 1;
  let b = 3;

  [a, b] = [b, a];
  console.log(a); // 3
  console.log(b); // 1

  Object destructuring

  // Variable assignment.
  const o = { p: 42, q: true };
  const { p, q } = o;

  console.log(p); // 42
  console.log(q); // true`,
  },
  {
    question:
      "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
    answer:
      `          const person = { name: 'Tyler', age: 28 };
          console.log(` +
      "Hi, my name is ${person.name} and I am ${person.age} years old!" +
      `);
          // 'Hi, my name is Tyler and I am 28 years old!'

          console.log(` +
      "This is line one." +
      +"This is line two." +
      `);
          // This is line one.
          // This is line two.

          const person = { name: 'Tyler', age: 28 };
          document.body.innerHTML = ` +
      "div" +
      `

        p Name:` +
      "${person.name}" +
      ` /p
        p Name:` +
      "${person.age}" +
      ` /p

      /div `,
  },
  {
    question:
      "Can you give an example of a curry function and why this syntax offers an advantage?",
    answer:
      "- Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. This technique can be useful for making written in a functional style easier to read and compose. It's important to note that for a function to be curried, it needs to start out as one function, then broken out into a sequence of functions that each accepts one parameter.",
    example: `
    function add(n){
      let fn = (x) => add(n+x);
      //fn becomes a function which contains add(n+x)
      fn.valueOf=()=>n;
      //valueOf returns the nativ value 
      //setting the fn value on n 
      return fn;
      }

    function add (num) {
      function adder(n) {
        // if the next potential argument is falsey, we can exist and return accumulated sum
        if (!n) {
          return num;
        } else {
          // otherwise we keep a running sum by adding the newest argument to num
          //  we chain the process by returning our named function
          num += n;
          return adder;
        }
      }
    
      return adder;
  }
  
  //first function add(1)(2)(3).valueOf();
  //second function add(1)(2)(3)();
    `,
  },
  {
    question: "Why you might want to create static class members?",
    answer:
      "- Static class members (properties/methods) are not tied to a specific instance of a class and have the same value regardless of which instance is referring to it. Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance.",
    example: `function countMyself() {
// Check to see if the counter has been initialized
if ( typeof countMyself.counter == 'undefined' ) {
    // It has not... perform the initialization
    // after the first time the counter will never set back
    // to 0 because it is now static
    countMyself.counter = 0;
}

// Do something stupid to indicate the value
alert(++countMyself.counter);
}`,
  },
  {
    question:
      "What are the benefits of using spread syntax and how is it different from rest syntax?",
    answer: `- ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to Object.create, slice, or a library function. This language feature is used often in Redux and RxJS projects.
    
    
    function putDookieInAnyArray(arr) {
      return [...arr, 'dookie'];
    }
    
    const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]
    
    const person = {
      name: 'Todd',
      age: 29,
    };
    
    const copyOfTodd = { ...person };

    - ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

          function addFiveToABunchOfNumbers(...numbers) {
            return numbers.map(x => x + 5);
          }
          
          const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]
          
          const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]
          
          const { e, f, ...others } = {
            e: 1,
            f: 2,
            g: 3,
            h: 4,
          }; // e: 1, f: 2, others: { g: 3, h: 4 }
    `,
  },
  {
    question:
      "Can you name two programming paradigms important for JavaScript app developers?",
    answer:
      "JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.",
  },
  {
    question: "What is functional programming?",
    answer: `Functional programming is:
    - usage of pure functions
    - avoiding side effects
    - first-class functions
    - high-order functions`,
  },
  {
    question:
      "What is the difference between classical inheritance and prototypal inheritance?",
    answer: `Class Inheritance:
    - instances inherit from classes
    - creates subclass relationships
    - instantiated via 'new' keyword
    
    Prototypal Inheritance:
    - instances inherit directly from other objects
    - instantiated via Object.create()`,
  },
  {
    question:
      "What are the pros and cons of functional programming vs object-oriented programming?",
    answer: `OOP
    Pros:
    - easy to understand the basic concept of objects
    - uses imperative styles rather than declarative style
    
    Cons:
    - depends on shared state
    - objects and behaviors are tacked together, which often leads to undesirable behavior
    - resistant to change
    
    FP
    Pros:
    - avoiding shared state and side-effects, which eliminates bugs
    - functions are more simplified and easily recomposed for more generally reusable code
    - ueses more declarative style
    
    Cons:
    - reusable code often leads to more abstractly specified code and reduces readability
    - has a steeper learning curve than OOP
    - 
    `,
  },
  {
    question: "When is classical inheritance an appropriate choice?",
    answer:
      "Almost never, but a single level is acceptable from a frame work base-class such as React.Component",
  },
  {
    question: "When is prototypal inheritance an appropriate choice?",
    answer: `When you need to compose objects from multiple sources.
    
    types of prototypal inheritance:
    - Delegation (i.e., the prototype chain)
    - Concatenative (i.e. mixins, 'Object,assign()')
    - Functional
    `,
  },
  {
    question:
      "What does “favor object composition over class inheritance” mean?",
    answer: `- avoid class hierarchies
    - make code more flexible    
    `,
  },
  {
    question:
      "What are the pros and cons of monolithic vs microservice architectures?",
    answer: `monolithic: 
    - one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources
    
    microservice: 
    - app is made up of lots of smaller, independent applications
    - each of the running their own memory space and scaling independently
    `,
  },
  {
    question: "What is Ajax?",
    answer: "Async data transfer to a server without interrupting the ux",
  },
];

export default JavaScriptQuestions;
