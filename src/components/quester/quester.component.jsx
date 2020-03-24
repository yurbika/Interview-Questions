import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/*tasks */
//collects all answers with an id
//gets new questions
//beware of which question is already asked

/*needs */
//which questions should be asked

const Quester = () => (
  <div className="question-container">
    <div className="question"></div>
    <input className="input"></input>
  </div>
);

export default Quester;
