import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectQuestionFile } from "../../redux/quester/quester.selectors";

import { selectJavaScript } from "../../redux/home/home.selectors";

//styles
import "./quester.styles.scss";

/*tasks */
//collects all answers with an id
//gets new questions
//beware of which question is already asked
//depending on buttion click show random question
// function randomIntFromInterval(min, max) {
//     // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

/*needs */
//which questions should be asked

const Quester = ({ questions, jsVisible }) => {
  console.log(!!questions ? Object.keys(questions).length : null);

  return (
    <div className={"question-container" + (jsVisible ? "" : " noShow")}>
      <div className="question">
        {!!questions ? questions[1]["question"] : null}
      </div>
      <input className="input"></input>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  jsVisible: selectJavaScript
});

export default connect(mapStateToProps)(Quester);
