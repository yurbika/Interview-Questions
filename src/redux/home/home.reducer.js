import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  javaScriptQuestionsVisible: false,
  htmlQuestionsVisible: false,
  cssQuestionsVisible: false,
  reactQuestionsVisible: false,
  reduxQuestionsVisible: false,
  solutionVisible: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return {
        ...state,
        javaScriptQuestionsVisible: !state.javaScriptQuestionsVisible
      };
    case HomeActionTypes.TOGGLE_SOLUTION:
      return { ...state, solutionVisible: !state.solutionVisible };
    case HomeActionTypes.SET_ALL_FALSE:
      return {
        ...state,
        javaScriptQuestionsVisible: false,
        htmlQuestionsVisible: false,
        cssQuestionsVisible: false,
        reactQuestionsVisible: false,
        reduxQuestionsVisible: false,
        solutionVisible: false
      };
    default:
      return state;
  }
};

export default homeReducer;
