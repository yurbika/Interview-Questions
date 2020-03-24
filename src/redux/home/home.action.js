import HomeActionTypes from "./home.types";

const toggleQuestions = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return { type: HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS };
    default:
      return null;
  }
};

export default toggleQuestions;
