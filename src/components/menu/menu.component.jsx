import React from "react";
import { connect } from "react-redux";

//redux
import toggle from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

import {
  setQuestionFile,
  setQuestionsOrder
} from "../../redux/quester/quester.action";

//styles
import { MenuContainer } from "./menu.styles";

//utils
import JavaScriptQuestions from "../../questions/js-questions/javaScript";
import { createRandomOrderOfNumbers } from "../quester/quester.utils";

const Menu = ({ toggle, setQuestionFile, setQuestionsOrder }) => (
  <MenuContainer id="menu">
    <h4>Select a section:</h4>
    <ul>
      <li
        onClick={() => {
          toggle(HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS);
          document.getElementById("menu").style.opacity = 0;
          document.getElementById("menu").style.pointerEvents = "none";
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
  </MenuContainer>
);

const mapDispatchToPrps = dispatch => ({
  toggle: type => dispatch(toggle(type)),
  setQuestionFile: file => dispatch(setQuestionFile(file)),
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array))
});

export default connect(null, mapDispatchToPrps)(Menu);
