import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import {
  selectQuestionFile,
  selectLengthOfQuestions
} from "../../redux/quester/quester.selectors";

import { setLengthOfQuestions } from "../../redux/quester/quester.action";

import { selectJavaScript } from "../../redux/home/home.selectors";

//styles
import "./quester.styles.scss";

//utils
import { createArrayOfNumbers, randomIntFromInterval } from "./quester.utils";

/*tasks */
//collects all answers with an id
//gets new questions
//beware of which question is already asked
//depending on buttion click show random question

/*needs */
//which questions should be asked

const Quester = ({ questions, jsVisible, array, setLengthOfQuestions }) => {
  if (!!questions && array.length < Object.keys(questions).length) {
    setLengthOfQuestions(
      createArrayOfNumbers(1, Object.keys(questions).length)
    );
  }
  return (
    <div className={"question-container" + (jsVisible ? "" : " noShow")}>
      <div className="question">{!!questions ? null : null}</div>
      <input className="input"></input>
      <button
        onClick={() => {
          console.log(this.array.lenght);
          let randomIndex = randomIntFromInterval(0, Number(array.lenght - 1));
          console.log(randomIndex);
          setLengthOfQuestions(array.splice(randomIndex, 1));
          //setIndex(randomIndex);
        }}
      >
        Next
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  jsVisible: selectJavaScript,
  array: selectLengthOfQuestions
});

const mapDispatchToProps = dispatch => ({
  setLengthOfQuestions: array => dispatch(setLengthOfQuestions(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quester);
