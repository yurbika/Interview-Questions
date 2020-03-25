import QuesterActionTypes from "./quester.types";

const INITIAL_STATE = {
  questionFile: null,
  listOfAskedQuestionsWithAnswers: [],
  questionsOrder: [],
  index: 0,
  currInputText: ""
};

const questerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuesterActionTypes.SET_QUESTION_FILE:
      return { ...state, questionFile: action.payload };
    case QuesterActionTypes.SET_LIST_OF_ASKED_QUESTIONS:
      return {
        ...state,
        listOfAskedQuestionsWithAnswers: [
          action.payload,
          ...state.listOfAskedQuestionsWithAnswers
        ]
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
    case QuesterActionTypes.SET_INPUT:
      return {
        ...state,
        currInputText: action.payload
      };
    case QuesterActionTypes.CLEAR_INPUT:
      return {
        ...state,
        currInputText: ""
      };
    default:
      return state;
  }
};

export default questerReducer;
