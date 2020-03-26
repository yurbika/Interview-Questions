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
  addToList
} from "../../redux/quester/quester.action";

import { selectJavaScript } from "../../redux/home/home.selectors";
import toggle from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

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
  jsVisible,
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
      <Button
        cancel
        onClick={() => {
          if (index < array.length - 1) {
            clearInput();
            console.log(input);
            addToList({ [array[index]]: input });
            setIndex(++index);
          } else {
            addToList({ [array[index]]: input });
            toggle(HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS);
            toggle(HomeActionTypes.TOGGLE_SOLUTION);
          }
        }}
      >
        {index === array.length - 1 ? "Finish" : "Next"}
      </Button>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput,
  jsVisible: selectJavaScript
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
