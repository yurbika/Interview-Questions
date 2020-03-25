import React from "react";
import { connect } from "react-redux";

//redux
import toggleQuestions from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

import {
  setQuestionFile,
  setQuestionsOrder
} from "../../redux/quester/quester.action";

//styles
import "./navbar.styles.scss";

//utils
import JavaScriptQuestions from "../../questions/js-questions/javaScript";
import { createRandomOrderOfNumbers } from "../../components/quester/quester.utils";

const Navbar = ({ toggleQuestions, setQuestionFile, setQuestionsOrder }) => (
  <div className="navbar" id="navbar">
    <h4>Select a section:</h4>
    <ul>
      <li
        onClick={() => {
          toggleQuestions(HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS);
          document.getElementById("navbar").style.opacity = 0;
          document.getElementById("navbar").style.pointerEvents = "none";
          setQuestionFile(JavaScriptQuestions);
          setQuestionsOrder(
            createRandomOrderOfNumbers(JavaScriptQuestions.length - 1)
          );
        }}
      >
        JavaScript
      </li>
      <li>CSS</li>
      <li>HTML</li>
      <li>React</li>
      <li>Redux</li>
    </ul>
  </div>
);

const mapDispatchToPrps = dispatch => ({
  toggleQuestions: type => dispatch(toggleQuestions(type)),
  setQuestionFile: file => dispatch(setQuestionFile(file)),
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array))
});

export default connect(null, mapDispatchToPrps)(Navbar);
