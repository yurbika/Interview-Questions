import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  javaScriptQuestionsVisible: false,
  htmlQuestionsVisible: false,
  cssQuestionsVisible: false,
  reactQuestionsVisible: false,
  reduxQuestionsVisible: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return {
        ...state,
        javaScriptQuestions: !state.javaScriptQuestionsVisible
      };
    case HomeActionTypes.TOGGLE_HTML_QUESTIONS:
      return { ...state, htmlQuestionsVisible: !state.htmlQuestionsVisible };
    default:
      return state;
  }
};

export default homeReducer;
