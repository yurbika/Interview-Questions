import HomeActionTypes from "../../redux/home/home.types";

//question list
import JavaScriptQuestions from "../../questions/js-questions/javaScript";

export const questionDecider = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return JavaScriptQuestions;
    default:
      return null;
  }
};

const randomInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createArrayOfNumbers = (end, start = 0) => {
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
    let randomIndex = randomInterval(0, array.length - 1);
    arrayWithRandomNumbers.push(array[randomIndex]);
    array.splice(randomIndex, 1);
    i++;
  }
  return arrayWithRandomNumbers;
};
