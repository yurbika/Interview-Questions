import QuesterActionTypes from "./quester.types";

export const setQuestionFile = file => ({
  type: QuesterActionTypes.SET_QUESTION_FILE,
  payload: file
});

export const addToList = object => ({
  type: QuesterActionTypes.SET_LIST_OF_ASKED_QUESTIONS,
  payload: object
});

export const setQuestionsOrder = array => ({
  type: QuesterActionTypes.SET_QUESTIONS_ORDER,
  payload: array
});

export const setIndex = num => ({
  type: QuesterActionTypes.SET_INDEX,
  payload: num
});

export const setInput = text => ({
  type: QuesterActionTypes.SET_INPUT,
  payload: text
});

export const clearInput = () => ({
  type: QuesterActionTypes.CLEAR_INPUT
});

export const clearEverything = () => ({
  type: QuesterActionTypes.CLEAR_EVERYTHING
});
