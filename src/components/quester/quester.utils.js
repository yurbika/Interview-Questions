import HomeActionTypes from "../../redux/home/home.types";

//question list
import JavaScriptQuestions from "../../questions/js-questions/javaScript";

const questionDecider = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return JavaScriptQuestions;
    default:
      return null;
  }
};

export default questionDecider;
