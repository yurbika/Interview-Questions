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

//styles
import "./quester.styles.scss";

/*tasks */
//collects all answers with an id
//gets new questions
//beware of which question is already asked
//depending on buttion click show random question

/*needs */
//which questions should be asked

const Quester = ({
  questions,
  array,
  index,
  setIndex,
  input,
  setInput,
  clearInput,
  addToList
}) => {
  return (
    <div className="question-container">
      <div className="question">{questions[array[index]]["question"]}</div>
      <input
        className="input"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (index < array.length - 1) {
            setIndex(++index);
            clearInput();
            addToList({ questionNum: array[index], answer: input });
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num)),
  setInput: str => dispatch(setInput(str)),
  clearInput: () => dispatch(clearInput()),
  addToList: object => dispatch(addToList(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quester);
