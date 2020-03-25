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
      {questions.map((item, index) => (
        <div>
          <span>Q.: {item["question"]}</span>
          <span>A.: {item["answer"]}</span>
          <pre>Y.A.: {userAnswers[index]}</pre>
          {!!item["example"] ? <span>E.:{item["example"]}</span> : null}
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
