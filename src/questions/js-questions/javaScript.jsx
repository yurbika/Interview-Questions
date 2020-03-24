import React from "react";

import { Form } from "./javaScript.styles";

const JavaScriptQuestions = {
  1: {
    question: "What is event delagation?",
    answer:
      "JS event listeners fire not only on a single DOM element but on all its descendants",
    example: (
      <Form onClick={() => alert(`EventListener attached on form only`)}>
        Form
        <div>
          Div
          <pre>P</pre>
        </div>
      </Form>
    )
  },
  2: {
    question: "What is event bubbling?",
    answer:
      "Inverse of delegation, also know as Propogations. Events on an element will bubble up and also fire on all parents"
  },
  3: {
    question: "What is the difference between target and currentTarget",
    answer: (
      <div>
        target = the element that triggered the event <br></br>
        currentTarget = the element that the event listener is attached to
      </div>
    )
  }
};

export default JavaScriptQuestions;
