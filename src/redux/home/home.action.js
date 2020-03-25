import HomeActionTypes from "./home.types";

const toggle = type => {
  switch (type) {
    case HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS:
      return { type: HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS };
    case HomeActionTypes.TOGGLE_SOLUTION:
      return {
        type: HomeActionTypes.TOGGLE_SOLUTION
      };
    default:
      return null;
  }
};

export default toggle;
