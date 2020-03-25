import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import {
  selectQuestionFile,
  selectQuestionsOrder,
  selectIndex
} from "../../redux/quester/quester.selectors";

import {
  setQuestionsOrder,
  setIndex
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

const Quester = ({ questions, array, index, setIndex }) => {
  return (
    <div className="question-container">
      <div className="question">{questions[array[0 + index]]["question"]}</div>
      <input className="input"></input>
      <button
        onClick={() => {
          if (index < array.length - 1) setIndex(++index);
          //save answers and corresponding id
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
  index: selectIndex
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quester);
