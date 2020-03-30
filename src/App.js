import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Home from "./pages/home/home.component";
import Navigation from "./components/navigation/navigation.component";

//redux
//redux
import { selectQuestions, selectSolution } from "./redux/home/home.selectors";

//styles
import "./App.css";

const App = ({ questionsVisible, solutionVisible }) => {
  return (
    <div className="App">
      <Home />
      {questionsVisible || solutionVisible ? <Navigation /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  questionsVisible: selectQuestions,
  solutionVisible: selectSolution
});

export default connect(mapStateToProps)(App);
