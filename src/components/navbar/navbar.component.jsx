import React from "react";
import { connect } from "react-redux";

//redux
import toggleQuestions from "../../redux/home/home.action";
import HomeActionTypes from "../../redux/home/home.types";

//styles
import "./navbar.styles.scss";

const Navbar = ({ toggleQuestions }) => (
  <div className="navbar" id="navbar">
    <span>Select a section:</span>
    <div
      onClick={() => {
        toggleQuestions(HomeActionTypes.TOGGLE_JAVASCRIPT_QUESTIONS);
        document.getElementById("navbar").style.opacity = 0;
      }}
    >
      <span>JavaScript</span>
    </div>
    <div>
      <span>CSS</span>
    </div>
    <div>
      <span>HTML</span>
    </div>
    <div>
      <span>React</span>
    </div>
    <div>
      <span>Redux</span>
    </div>
  </div>
);

const mapDispatchToPrps = dispatch => ({
  toggleQuestions: type => dispatch(toggleQuestions(type))
});

export default connect(null, mapDispatchToPrps)(Navbar);
