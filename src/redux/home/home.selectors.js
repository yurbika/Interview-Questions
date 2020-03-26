import { createSelector } from "reselect";

const selectHome = state => state.home;

export const selectQuestions = createSelector(
  [selectHome],
  home => home.questionsVisible
);

export const selectSolution = createSelector(
  [selectHome],
  home => home.solutionVisible
);
