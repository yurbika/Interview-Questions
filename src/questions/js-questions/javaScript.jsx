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
    )
  },
  {
    question: "What is event bubbling?",
    answer:
      "Inverse of delegation, also know as Propogations. Events on an element will bubble up and also fire on all parents"
  },
  {
    question: "What is the difference between target and currentTarget?",
    answer:
      "- target = the element that triggered the event \n- currentTarget = the element that the event listener is attached to"
  },
  {
    question: "What does IIFE mean?",
    answer: "Immediately invoked function expression"
  },
  {
    question: "What is the purpose of an IIFE",
    answer: "Control variable scope",
    example: "(()=>/* do something */)"
  },
  {
    question: "What is the difference between an expression and a statement",
    answer:
      "- expression: is any valid unit that resolves to a value \n- statement: stands for anything that performs an action"
  },
  {
    question:
      "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer: "- Reduces collision\n- Maintain independence"
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
  }`
  },
  {
    question:
      "Whats the difference between a variable that is: null, undefined or undeclared?",
    answer:
      "- null: is a value, a 'nothing' value\n- undefined: a variable thats only declared\n- undeclared: a variable that isnt existing"
  },
  {
    question:
      "How would you go about checking for null, undefined or undeclared?",
    answer:
      "-for the first two a triple sign(===) will do the job (carefull if you use typeof, because null is a object and undefined is a string)\n- undeclared will find you"
  },
  {
    question: "Whats the difference between == and ===?",
    answer:
      "- == is used for comparison between two variables irrespective of the datatype of variable\n- === is used for comparision between two variables but this will check strict type, which means it will"
  },
  {
    question: "Explain how 'this' works in one scenario",
    answer: `- If the new keyword is used when calling the function, this inside the function is a brand new object.

- If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

- If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

- If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

- If multiple of the above rules apply, the rule that is higher wins and will set the this value.

- If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.
`
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
  fido.bark(); // ‘woof!’`
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
  `
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
    syntax.`
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
  
The main difference between .forEach and .map() is that .map() returns a new array.`
  },
  {
    question: "What's a typical use case for anonymous functions?",
    answer: `- They can be used in IIFEs to encapsulate somwithin a local scope so that variables declared in it do not leak to the global scope.

- As a callback that is used once and does not need to be used anywhere else. They will seem more self-contained and readable when handlers are defined right inside them, rather than having to search elsewhere to find the function body.

- Arguments to functional programming constructs or Lodash (similar to callbacks).`
  },
  {
    question: "What's the difference between host objects and native objects?",
    answer: `- Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
    
 - Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.`
  },
  {
    question:
      "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
    answer: `- function Person(){} is just a normal function declaration

- var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor.

- var person = new Person() creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype).`
  },
  {
    question:
      "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
    answer: `- The first one is a function declaration while the other is a function expression. The key difference is that function declarations have its body hoisted but the bodies of function expressions are not.`
  },
  {
    question: "What's the difference between .call and .apply?",
    answer: `- Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.`
  },
  {
    question: "Explain Function.prototype.bind",
    answer: `- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.`
  },
  {
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    answer: `- Feature Detection:
    • Feature detection involves working out whether a
    browser supports a certain block o and running differen 
    depending on whether it does (or doesn't), so that the browser can
    always provide a working experience rather crashing/erroring in some
    browsers.
  
- Feature Inference:
    • Feature inference checks for a feature just like
    feature detection, but uses another function because it assumes it will
    also exist
  
- UA string:
    • This is a browser-reported string that allows the network
    protocol peers to identify the application type, operating system,
    software vendor or software version of the requesting software user
    agent. It can be accessed via navigator.userAgent. However, the string
    is tricky to parse and can be spoofed. For example, Chrome reports both
    as Chrome and Safari. So to detect Safari you have to check for the
    Safari string and the absence of the Chrome string. Avoid this method.`
  },
  {
    question: "Describe event capturing",
    answer: `Capturing, the event is first captured by the outermost element and propagated to the inner elements.`
  },
  {
    question: "What's the difference between an attribute and a property?",
    answer: `- Attributes are defined on the HTML markup but properties are defined on the DOM.
    
  - So if you want to know what's currently inside the text-box, read the property. If you, however, want to know what the initial value of the text-box was, read the attribute.`
  }
];

export default JavaScriptQuestions;
