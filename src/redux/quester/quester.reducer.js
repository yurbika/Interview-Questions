import QuesterActionTypes from "./quester.types";

const INITIAL_STATE = {
  questionFile: null,
  listOfAskedQuestionsWithAnswers: null,
  questionsOrder: [],
  index: 0,
  currInputText: null
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
    case QuesterActionTypes.SET_QUESTIONS_ORDER:
      return {
        ...state,
        questionsOrder: action.payload
      };
    case QuesterActionTypes.SET_INDEX:
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }
};

export default questerReducer;
