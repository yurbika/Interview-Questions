import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  questionsVisible: false,
  solutionVisible: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.TOGGLE_QUESTIONS:
      return {
        ...state,
        questionsVisible: !state.questionsVisible
      };
    case HomeActionTypes.TOGGLE_SOLUTION:
      return {
        ...state,
        solutionVisible: !state.solutionVisible
      };
    case HomeActionTypes.SET_ALL_FALSE:
      return {
        ...state,
        questionsVisible: false,
        solutionVisible: false
      };
    default:
      return state;
  }
};

export default homeReducer;
