import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectQuestionFile } from "../../redux/quester/quester.selectors";

/*tasks */
//collects all answers with an id
//gets new questions
//beware of which question is already asked
//depending on buttion click show random question

/*needs */
//which questions should be asked

const Quester = ({ questions }) => (
  <div className="question-container">
    <div className="question">
      {!!questions ? questions[1]["question"] : null}
    </div>
    <input className="input"></input>
  </div>
);

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile
});

export default connect(mapStateToProps)(Quester);
