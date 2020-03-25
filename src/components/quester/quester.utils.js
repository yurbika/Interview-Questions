import HomeActionTypes from "../../redux/home/home.types";

//question list
import JavaScriptQuestions from "../../questions/js-questions/javaScript";
import { setLengthOfQuestions } from "../../redux/quester/quester.action";

export const questionDecider = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return JavaScriptQuestions;
    default:
      return null;
  }
};

export const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createArrayOfNumbers = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

export const randomQuestGenerator = array => {
  let randomIndex = randomIntFromInterval(0, array.lenght - 1);
  array = array.splice(randomIndex, 1);
  setLengthOfQuestions(array);
  return 1;
};
