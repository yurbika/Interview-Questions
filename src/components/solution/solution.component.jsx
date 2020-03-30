import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectQuestionFile } from "../../redux/quester/quester.selectors";

import { selectList } from "../../redux/quester/quester.selectors";

//utils
import KEY_GENERATOR from "../../utils/uniqueKey";

//styles
import { Container, Item, ItemWrapper } from "./solution.styles";

import JavaScriptQuestions from "../../questions/js-questions/javaScript";
import HTMLQuestions from "../../questions/html-questions/html.jsx";
import CSSQuestions from "../../questions/css-questions/css";
import ReactQuestions from "../../questions/react-questions/react";
import ReactQuestions2 from "../../questions/react-questions/react2";

const Solution = ({ questions, userAnswers }) => {
  return (
    <Container>
      <h1>Solution</h1>
      {ReactQuestions2.map((item, index) => (
        <ItemWrapper key={KEY_GENERATOR("Solution-Container-")}>
          <Item>
            <span title="Question">Q.: </span>
            <span>{item["question"]}</span>
          </Item>
          <Item>
            <span title="Answer">A.: </span>
            <pre>{item["answer"]}</pre>
          </Item>
          <Item>
            <span title="Your Answer">Y.A.:</span>
            <pre>{userAnswers[index]}</pre>
          </Item>
          {!!item["example"] ? (
            <Item>
              <span title="Example">E.:</span> <pre>{item["example"]}</pre>
            </Item>
          ) : null}
        </ItemWrapper>
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  userAnswers: selectList
});

export default connect(mapStateToProps)(Solution);
