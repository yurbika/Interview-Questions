import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Button from "../../components/button/button.component";

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

import { selectJavaScript } from "../../redux/home/home.selectors";
import toggle from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

//styles
import "./navigation.styles.scss";

const Navigation = ({ index, array, setIndex, addToList, toggle, input }) => {
  return (
    <div className="container">
      {index > 0 ? (
        <div className="button-wrapper">
          <Button secondary onClick={() => setIndex(--index)}>
            Back
          </Button>
        </div>
      ) : null}
      <div className="button-wrapper">
        <Button>Menu</Button>
      </div>
      <div className="button-wrapper">
        <Button
          secondary
          onClick={() => {
            if (index < array.length - 1) {
              addToList({ [array[index]]: input });
              setIndex(++index);
            } else {
              addToList({ [array[index]]: input });
              toggle(HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS);
              toggle(HomeActionTypes.TOGGLE_SOLUTION);
            }
            clearInput();
          }}
        >
          {console.log(index)}
          {index === array.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput,
  jsVisible: selectJavaScript
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num)),
  setInput: str => dispatch(setInput(str)),
  clearInput: () => dispatch(clearInput()),
  addToList: object => dispatch(addToList(object)),
  //home action
  toggle: type => dispatch(toggle(type))
});
//erlaubt es antworten zu speichern im localstorage
//next button wird hier implementiert
//back button um eine frage zurück zu gehen
//ein button um ins menü wieder zukommen

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
