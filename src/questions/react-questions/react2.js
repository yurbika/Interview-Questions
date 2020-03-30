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
  }
];

export default ReactQuestions2;
