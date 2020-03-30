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

import { setInput } from "../../redux/quester/quester.action";

//styles
import { Container } from "./quester.styles";

const Quester = ({ questions, array, index, input, setInput }) => {
  return (
    <Container>
      <span>{questions[array[index]]["question"]}</span>
      <span>{index + 1 + "/" + array.length}</span>
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
  input: selectInput
});

const mapDispatchToProps = dispatch => ({
  setInput: str => dispatch(setInput(str))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quester);
