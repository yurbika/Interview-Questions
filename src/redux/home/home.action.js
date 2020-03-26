import HomeActionTypes from "./home.types";

const toggle = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return { type: HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS };
    case HomeActionTypes.TOGGLE_SOLUTION:
      return {
        type: HomeActionTypes.TOGGLE_SOLUTION
      };
    case HomeActionTypes.SET_ALL_FALSE:
      return {
        type: HomeActionTypes.SET_ALL_FALSE
      };
    default:
      return null;
  }
};

export default toggle;
