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
  addToList,
  clearEverything
} from "../../redux/quester/quester.action";

import {
  selectJavaScript,
  selectSolution
} from "../../redux/home/home.selectors";
import toggle from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

//styles
import "./navigation.styles.scss";

const Navigation = ({
  index,
  array,
  setIndex,
  addToList,
  toggle,
  input,
  clearEverything,
  clearInput,
  solutionVisible
}) => {
  return (
    <div className={"container" + (solutionVisible ? " solution" : "")}>
      {!solutionVisible ? (
        index > 0 ? (
          <div className="button-wrapper">
            <Button secondary onClick={() => setIndex(--index)}>
              Back
            </Button>
          </div>
        ) : null
      ) : null}
      <div className="button-wrapper">
        <Button
          onClick={() => {
            /*
        reseting everything
        */
            toggle(HomeActionTypes.SET_ALL_FALSE);
            clearEverything();
            if (!!document.getElementById("menu")) {
              document.getElementById("menu").style.opacity = "1";
              document.getElementById("menu").style.pointerEvents = "unset";
            }
          }}
        >
          Menu
        </Button>
      </div>
      {!solutionVisible ? (
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
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: selectQuestionFile,
  array: selectQuestionsOrder,
  index: selectIndex,
  input: selectInput,
  jsVisible: selectJavaScript,
  solutionVisible: selectSolution
});

const mapDispatchToProps = dispatch => ({
  setQuestionsOrder: array => dispatch(setQuestionsOrder(array)),
  setIndex: num => dispatch(setIndex(num)),
  setInput: str => dispatch(setInput(str)),
  clearInput: () => dispatch(clearInput()),
  addToList: object => dispatch(addToList(object)),
  clearEverything: () => dispatch(clearEverything()),
  //home action
  toggle: type => dispatch(toggle(type))
});
//erlaubt es antworten zu speichern im localstorage
//next button wird hier implementiert
//back button um eine frage zurück zu gehen
//ein button um ins menü wieder zukommen

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
