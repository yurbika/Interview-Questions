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
  }
];

export default ReactQuestions2;
