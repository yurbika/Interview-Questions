import { createSelector } from "reselect";

const selectHome = state => state.home;

export const selectJavaScript = createSelector(
  [selectHome],
  home => home.javaScriptQuestionsVisible
);

export const selectSolution = createSelector(
  [selectHome],
  home => home.solutionVisible
);
