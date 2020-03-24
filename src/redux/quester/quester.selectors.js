import { createSelector } from "reselect";

const selectQuester = state => state.quester;

export const selectQuestionFile = createSelector(
  [selectQuester],
  quester => quester.questionFile
);

export const selectList = createSelector(
  [selectQuester],
  quester => quester.listOfAskedQuestionsWithAnswers
);
