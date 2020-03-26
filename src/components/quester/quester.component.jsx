import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
  addToList
} from "../../redux/quester/quester.action";

import { selectQuestions } from "../../redux/home/home.selectors";
import toggle from "../../redux/home/home.action";

//styles
import { Container } from "./quester.styles";

const Quester = ({
  questions,
  array,
  index,
  setIndex,
  input,
  setInput,
  clearInput,
  addToList,
  //home redux
  questionsVisible,
  toggle
}) => {
  return (
    <Container>
      <span>{questions[array[index]]["question"]}</span>
      <textarea
        value={input}
        onChange={e => {
          setInput(`${e.target.value}`);
        }}
      />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput,
  questionsVisible: selectQuestions
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num)),
  setInput: str => dispatch(setInput(str)),
  clearInput: () => dispatch(clearInput()),
  addToList: object => dispatch(addToList(object)),
  //home action
  toggle: type => dispatch(toggle(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quester);
