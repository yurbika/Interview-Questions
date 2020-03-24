import React from "react";

import Navbar from "../../components/navbar/navbar.component";

import "./home.styles.scss";

import JavaScriptQuestions from "../../questions/js-questions/javaScript";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div>
        {Object.keys(JavaScriptQuestions).map(index => (
          <div>
            {JavaScriptQuestions[index]["question"]}
            <br></br>
            {JavaScriptQuestions[index]["answer"]}
            <br></br>
            {JavaScriptQuestions[index]["example"]}
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
