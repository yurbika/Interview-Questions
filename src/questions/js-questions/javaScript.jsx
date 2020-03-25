import React from "react";

import { Form } from "./javaScript.styles";

const JavaScriptQuestions = [
  {
    question: "What is event delagation?",
    answer:
      "JavaScript event listeners fires not only on a single DOM element but on all its descendants",
    example: (
      <div>
        <Form onClick={() => alert(`EventListener attached on form only`)}>
          Form - Click Me
          <div>
            Div - Click Me
            <p>P - Click Me</p>
          </div>
        </Form>
      </div>
    )
  },
  {
    question: "What is event bubbling?",
    answer:
      "Inverse of delegation, also know as Propogations. Events on an element will bubble up and also fire on all parents"
  },
  {
    question: "What is the difference between target and currentTarget?",
    answer: (
      <span>
        - target = the element that triggered the event <br></br>
        <br></br>- currentTarget = the element that the event listener is
        attached to
      </span>
    )
  }
];

export default JavaScriptQuestions;
