const ReactQuestions3 = [
  {
    question: "What will happen if you use setState() in constructor?",
    answer:
      "When you use setState(), then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor."
  },
  {
    question: "Is it good to use setState() in componentWillMount() method?",
    answer:
      "No, we need to make sure async calls for component initialization happened in componentDidMount() instead of componentWillMount()."
  },
  {
    question: "What will happen if you use props in initial state?",
    answer:
      "If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created."
  },
  {
    question: "Why we need to be careful when spreading props on DOM elements?",
    answer:
      "When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props."
  },
  {
    question: "How you implement Server Side Rendering?",
    answer:
      "React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side."
  },
  {
    question: "How to enable production mode in React?",
    answer:
      "You should use Webpack's DefinePlugin method to set NODE_ENV to production, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle."
  },
  {
    question:
      "What is the purpose of getDerivedStateFromProps() lifecycle method?",
    answer:
      "The new static getDerivedStateFromProps() lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates."
  },
  {
    question:
      "What is the purpose of getSnapshotBeforeUpdate() lifecycle method?",
    answer:
      "The new getSnapshotBeforeUpdate() lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to componentDidUpdate()."
  },
  {
    question: "Do Hooks replace render props and higher order components?",
    answer:
      "Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree."
  },
  {
    question: "What is the recommended ordering of methods in component class?",
    answer: `1. static methods

2. constructor()

3. getChildContext()

4. componentWillMount()

5. componentDidMount()

6. componentWillReceiveProps()

7. shouldComponentUpdate()

8. componentWillUpdate()

9. componentDidUpdate()

10. componentWillUnmount()

11. click handlers or event handlers like onClickSubmit() or onChangeDescription()

12. getter methods for render like getSelectReason() or getFooterContent()

13. optional render methods like renderNavigation() or renderProfilePicture()

14. render()`
  },
  {
    question: "What is a switching component?",
    answer:
      "A switching component is a component that renders one of many components. We need to use object to map prop values to components."
  },
  {
    question: "Why we need to pass a function to setState()?",
    answer:
      "The reason behind for this is that setState() is an ASYNCHRONOUS operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called. "
  },
  {
    question: "What is strict mode in React?",
    answer:
      "StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants."
  },
  {
    question: "What are React Mixins?",
    answer:
      "Mixins are a way to totally separate components to have a common functionality."
  },
  {
    question: "Why is isMounted() an anti-pattern?",
    answer:
      "The primary use case for isMounted() is to avoid calling setState() after a component has been unmounted, because it will emit a warning."
  },
  {
    question: "What are the Pointer Events supported in React?",
    answer:
      "Pointer Events provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the Pointer Events specification."
  },
  {
    question: "Why should component names start with capital letter?",
    answer:
      "If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter."
  },
  {
    question: "What is the difference between constructor and getInitialState?",
    answer:
      "You should initialize state in the constructor when using ES6 classes, and getInitialState() method when using React.createClass()."
  },
  {
    question: "What is React proptype array with shape?",
    answer:
      "If you want to pass an array of objects to a component with a particular shape then use React.PropTypes.shape() as an argument to React.PropTypes.arrayOf().",
    example: `ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
        color: React.PropTypes.string.isRequired,
        fontSize: React.PropTypes.number.isRequired
      })).isRequired
    }`
  },
  {
    question: "What is the difference between React and ReactDOM?",
    answer:
      "The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().    "
  },
  {
    question:
      "What is the difference between setState() and replaceState() methods?    ",
    answer:
      "When you use setState() the current and previous states are merged. replaceState() throws out the current state, and replaces it with only what you provide."
  },
  {
    question: "How to pretty print JSON with React?",
    answer:
      "We can use <pre> tag so that the formatting of the JSON.stringify() is retained."
  },
  {
    question: "Why you can't update props in React?",
    answer:
      "The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props."
  },
  {
    question: "What are the possible ways of updating objects in state?",
    answer: `- Using Object.assign()

- spread operator

- setState with a function`
  },
  {
    question: "What are polyfills?",
    answer:
      "A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers."
  },
  {
    question: "How to use https instead of http in create-react-app?",
    answer:
      "You just need to use HTTPS=true configuration. You can edit your package.json scripts section."
  },
  {
    question: "How do you apply vendor prefixes to inline styles in React?",
    answer:
      "React does not apply vendor prefixes automatically. You need to add vendor prefixes manually."
  },
  {
    question: "Why is a component constructor called only once?",
    answer:
      "React's reconciliation algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one."
  },
  {
    question: "What are render props?",
    answer:
      "Render Props is a simple technique for sharing code between components using a prop whose value is a function.",
    example:
      `<DataProvider render={data => (
      <h1>{'Hello` +
      "${data.target}" +
      `'}</h1>
    )}/>`
  },
  {
    question: "What is React Router?",
    answer:
      "React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page."
  },
  {
    question: "How React Router is different from history library?",
    answer:
      "React Router is a wrapper around the history library which handles interaction with the browser's window.history with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node."
  },
  {
    question: "What is the use of react-dom package?",
    answer: `The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

- render()

- hydrate()

- unmountComponentAtNode()

- findDOMNode()

- createPortal()`
  },
  {
    question: "What is ReactDOMServer?",
    answer:
      "The ReactDOMServer object enables you to render components to static markup. Typically, it’s used on a Node server"
  },
  {
    question: "How to use innerHTML in React?",
    answer:
      "The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __html object as key and HTML text as value."
  },
  {
    question: "How to use styles in React?",
    answer:
      "The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes."
  }
];

export default ReactQuestions3;
