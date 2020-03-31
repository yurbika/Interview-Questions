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
import HTMLQuestions from "../../questions/html-questions/html.jsx";
import CSSQuestions from "../../questions/css-questions/css";
import ReactQuestions from "../../questions/react-questions/react";
import ReactQuestions2 from "../../questions/react-questions/react2";
import ReactQuestions3 from "../../questions/react-questions/react3";
import { createRandomOrderOfNumbers } from "../quester/quester.utils";

const Menu = ({ toggle, setQuestionFile, setQuestionsOrder }) => (
  <MenuContainer id="menu">
    <h4>Select a section:</h4>
    <ul
      onClick={() => {
        toggle(HomeActionTypes.TOGGLE_QUESTIONS);
        document.getElementById("menu").style.opacity = 0;
        document.getElementById("menu").style.pointerEvents = "none";
      }}
    >
      <li
        onClick={() => {
          setQuestionFile(JavaScriptQuestions);
          setQuestionsOrder(
            createRandomOrderOfNumbers(JavaScriptQuestions.length - 1)
          );
        }}
      >
        JavaScript
      </li>
      <li
        onClick={() => {
          setQuestionFile(CSSQuestions);
          setQuestionsOrder(
            createRandomOrderOfNumbers(CSSQuestions.length - 1)
          );
        }}
      >
        CSS
      </li>
      <li
        onClick={() => {
          setQuestionFile(HTMLQuestions);
          setQuestionsOrder(
            createRandomOrderOfNumbers(HTMLQuestions.length - 1)
          );
        }}
      >
        HTML
      </li>
      <li
        onClick={() => {
          setQuestionFile(ReactQuestions);
          setQuestionsOrder(
            createRandomOrderOfNumbers(ReactQuestions.length - 1)
          );
        }}
      >
        React Part 1
      </li>
      <li
        onClick={() => {
          setQuestionFile(ReactQuestions2);
          setQuestionsOrder(
            createRandomOrderOfNumbers(ReactQuestions2.length - 1)
          );
        }}
      >
        React Part 2
      </li>
      <li
        onClick={() => {
          setQuestionFile(ReactQuestions3);
          setQuestionsOrder(
            createRandomOrderOfNumbers(ReactQuestions3.length - 1)
          );
        }}
      >
        React Part 3
      </li>
    </ul>
  </MenuContainer>
);

const mapDispatchToPrps = dispatch => ({
  toggle: type => dispatch(toggle(type)),
  setQuestionFile: file => dispatch(setQuestionFile(file)),
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array))
});

export default connect(null, mapDispatchToPrps)(Menu);
