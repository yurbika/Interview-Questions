import QuesterActionTypes from "./quester.types";

const INITIAL_STATE = {
  questionFile: null,
  listOfAskedQuestionsWithAnswers: null,
  index: 0
};

const questerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuesterActionTypes.SET_QUESTION_FILE:
      return { ...state, questionFile: action.payload };
    case QuesterActionTypes.SET_LIST_OF_ASKED_QUESTIONS:
      return {
        ...state,
        listOfAskedQuestionsWithAnswers: action.payload
      };
    default:
      return state;
  }
};

export default questerReducer;
