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

const Solution = ({ questions, userAnswers }) => {
  return (
    <Container>
      <h1>Solution</h1>
      {questions.map((item, index) => (
        <ItemWrapper key={KEY_GENERATOR("Solution-Container-")}>
          <Item>
            <span>Q.: </span>
            <span>{item["question"]}</span>
          </Item>
          <Item>
            <span>A.: </span>
            <pre>{item["answer"]}</pre>
          </Item>
          <Item>
            <span>Y.A.:</span>
            <pre>{userAnswers[index]}</pre>
          </Item>
          {!!item["example"] ? (
            <Item>
              <span>E.:</span> <span>{item["example"]}</span>
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
