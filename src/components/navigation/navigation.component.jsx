import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Button from "../../components/button/button.component";

//redux
import {
  selectQuestionFile,
  selectQuestionsOrder,
  selectIndex,
  selectInput
} from "../../redux/quester/quester.selectors";

import {
  setQuestionsOrder,
  setIndex,
  setInput,
  clearInput,
  addToList,
  clearEverything
} from "../../redux/quester/quester.action";

import {
  selectQuestions,
  selectSolution
} from "../../redux/home/home.selectors";
import toggle from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

//styles
import { Container, ButtonWrapper } from "./navigation.styles";

const Navigation = ({
  index,
  array,
  setIndex,
  addToList,
  toggle,
  input,
  clearEverything,
  clearInput,
  solutionVisible
}) => (
  <Container solution={solutionVisible}>
    {index > 0 && !solutionVisible ? (
      <ButtonWrapper>
        <Button secondary onClick={() => setIndex(index - 1)}>
          Back
        </Button>
      </ButtonWrapper>
    ) : null}
    <ButtonWrapper>
      <Button
        onClick={() => {
          toggle(HomeActionTypes.SET_ALL_FALSE);
          clearEverything();
          if (!!document.getElementById("menu")) {
            document.getElementById("menu").style.opacity = "1";
            document.getElementById("menu").style.pointerEvents = "unset";
          }
        }}
      >
        Menu
      </Button>
    </ButtonWrapper>
    {!solutionVisible ? (
      <ButtonWrapper>
        <Button
          secondary
          onClick={() => {
            if (index < array.length - 1) {
              addToList({ [array[index]]: input });
              setIndex(index + 1);
            } else {
              addToList({ [array[index]]: input });
              toggle(HomeActionTypes.TOGGLE_QUESTIONS);
              toggle(HomeActionTypes.TOGGLE_SOLUTION);
            }
            clearInput();
          }}
        >
          {index === array.length - 1 ? "Finish" : "Next"}
        </Button>
      </ButtonWrapper>
    ) : null}
  </Container>
);

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput,
  selectQuestions: selectQuestions,
  solutionVisible: selectSolution
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num)),
  setInput: str => dispatch(setInput(str)),
  clearInput: () => dispatch(clearInput()),
  addToList: object => dispatch(addToList(object)),
  clearEverything: () => dispatch(clearEverything()),
  //home action
  toggle: type => dispatch(toggle(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
