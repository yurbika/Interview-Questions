const ReactQuestions = [
  {
    question: "What is React?",
    answer:
      "React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. "
  },
  {
    question: "What are the major features of React?",
    answer: `- It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.

- Supports server-side rendering.

- Follows Unidirectional data flow or data binding.

- Uses reusable/composable UI components to develop the view.`
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax."
  },
  {
    question: "What is the difference between Element and Component?",
    answer: `-An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.
      
- Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function.`
  },
  {
    question: "How to create components in React?",
    answer: `- Function Components
- Class Components`
  },
  {
    question: "When to use a Class Component over a Function Component?",
    answer:
      "If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component."
  },
  {
    question: "What are Pure Components?",
    answer:
      "React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called."
  },
  {
    question: "What is state in React?",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components."
  },
  {
    question: "What are props in React?",
    answer:
      "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes."
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function."
  },
  {
    question: "Why should we not update the state directly?",
    answer:
      "If you try to update state directly then it won't re-render the component."
  },
  {
    question:
      "What is the purpose of callback function as an argument of setState()?",
    answer:
      "The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action. (It is recommended to use lifecycle method rather than this callback function.)"
  },
  {
    question: "What is the difference between HTML and React event handling?",
    answer: `-event naming - HTML = lowercase/React = camelCase

- preventDefault() must be called explicitly in React. In HTML you can return false.

- In HTML, you need to invoke the function by appending () Whereas in React you should not append () with the function name.`
  },
  {
    question: "How to bind methods or event handlers in JSX callbacks?",
    answer: `- Binding in constructor
      
- Public class flieds syntax

-Arrow functions in callbacks`
  },
  {
    question: "What are synthetic events in React?",
    answer:
      "SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers."
  },
  {
    question: "What is inline conditional expressions?",
    answer:
      "You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&."
  }
];

export default ReactQuestions;
