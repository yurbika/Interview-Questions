import HomeActionTypes from "../../redux/home/home.types";

//question list
import JavaScriptQuestions from "../../questions/js-questions/javaScript";
import { setQuestionsOrder } from "../../redux/quester/quester.action";

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

const createArrayOfNumbers = (end, start = 1) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

export const createRandomOrderOfNumbers = length => {
  let i = 0;
  let arrayWithRandomNumbers = [];
  let array = createArrayOfNumbers(length);
  let arrayLength = array.length;

  while (i < arrayLength) {
    console.log(i);
    let randomIndex = randomIntFromInterval(0, array.length - 1);
    arrayWithRandomNumbers.push(array[randomIndex]);
    array.splice(randomIndex, 1);
    i++;
  }
  console.log(arrayWithRandomNumbers);
  return arrayWithRandomNumbers;
};
