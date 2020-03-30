const ReactQuestions2 = [
  {
    question:
      "What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?",
    answer:
      "If the ownProps parameter is specified, React Redux will pass the props that were passed to the component into your connect functions. "
  },
  {
    question: "What is redux-saga?",
    answer:
      "redux-saga is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better."
  },
  {
    question: "What is a side-effect in redux?",
    answer: `A "side effect" is anything that affects something outside the scope of the function being executed.`
  },

  {
    question: "What is the mental model of redux-saga?",
    answer:
      "Saga is like a separate thread in your application, that's solely responsible for side effects. Redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well."
  },
  {
    question:
      "What are the differences between call() and put() in redux-saga?",
    answer: `call() - function is used to create effect description, which instructs middleware to call the promise
      
put() - function cretes an effect, which instructs middleware to dispatch an action to the store`
  },
  {
    question: "What is Redux Thunk?",
    answer:
      "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters."
  },
  {
    question: "What are the differences between redux-saga and redux-thunk?",
    answer: `Redux-Saga - Uses generator functions
      
Redux-Thunk - Uses Promises

Both Redux Thunk and Redux Saga take care of dealing with side effects.`
  },
  {
    question: "What is Redux DevTools?",
    answer:
      "Redux DevTools is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. "
  },
  {
    question: "What are Redux selectors and why to use them?",
    answer:
      "Selectors are functions that take Redux state as an argument and return some data to pass to the component."
  },
  {
    question: "What is Redux Form?",
    answer:
      "Redux Form works with React and Redux to enable a form in React to use Redux to store all of its state."
  },
  {
    question: "How to add multiple middlewares to Redux?",
    answer: `const middlewares = [];

middlewares.push(logger);
middlewares.push(ReduxThunk);

const store = createStore(rootReducer, applyMiddleware(...middlewares));`
  },
  {
    question: "How Relay is different from Redux?",
    answer:
      "Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via GraphQL queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more."
  },
  {
    question: "What is the difference between React Native and React?",
    answer: `React - A JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.
      
React Native - A mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.`
  },
  {
    question: "What is reselect?",
    answer:
      "Reselect is a selector library (for Redux) which uses memoization concept."
  },
  {
    question: "How does reselect work?",
    answer:
      "Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes."
  },
  {
    question: "What are Styled Components?",
    answer:
      "styled-components is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript."
  },
  {
    question: "What is an action in Redux?",
    answer:
      "Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. "
  },
  {
    question: "What is the purpose of registerServiceWorker in React?",
    answer:
      "React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now. It's all about adding offline capabilities to your site."
  },
  {
    question: "What are hooks?",
    answer:
      "Hooks are functions that let you “hook into” React state and lifecycle features from function components."
  },
  {
    question: "How to ensure hooks followed the rules in your project?",
    answer:
      "React team released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules."
  },
  {
    question: "In which scenarios error boundaries do not catch errors?",
    answer: `- Inside Event handlers

- Asynchronous code using setTimeout or requestAnimationFrame callbacks

- During Server side rendering

- When errors thrown in the error boundary code itself`
  },
  {
    question: "Why do not you need error boundaries for event handlers?",
    answer:
      "Event handlers don't happened or invoked during rendering time unlike render method or lifecycle methods"
  },
  {
    question:
      "What is the difference between try catch block and error boundaries?",
    answer:
      "Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen."
  },
  {
    question: "What is the behavior of uncaught errors in react 16?",
    answer:
      "In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree."
  },
  {
    question: "What are the possible return types of render method?",
    answer: `- React elements

- Arrays and fragments

- Portals

- String and numbers

- Booleans or null`
  }
];

export default ReactQuestions2;
