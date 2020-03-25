import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectQuestionFile } from "../../redux/quester/quester.selectors";

import { selectList } from "../../redux/quester/quester.selectors";

//styles
import "./solution.styles.scss";

const Solution = ({ questions, userAnswers }) => {
  return (
    <div className="solution-container">
      <h1>Solution</h1>
      {questions.map((item, index) => (
        <div className="solution-content-container">
          <div className="solution-content">
            <span>Q.: </span>
            <span>{item["question"]}</span>
          </div>
          <div className="solution-content">
            <span>A.: </span>
            <pre>{item["answer"]}</pre>
          </div>
          <div className="solution-content">
            <span>Y.A.:</span>
            <pre>{userAnswers[index]}</pre>
          </div>
          {!!item["example"] ? (
            <div className="solution-content">
              <span>E.:</span> <span>{item["example"]}</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  userAnswers: selectList
});

export default connect(mapStateToProps)(Solution);
