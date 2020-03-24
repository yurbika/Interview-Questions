import React from "react";

import Navbar from "../../components/navbar/navbar.component";

import "./home.styles.scss";

import JavaScriptQuestions from "../../questions/js-questions/javaScript";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content-container">
          <Navbar />
          {/*  <div>
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
            </div>*/}
        </div>
      </div>
    );
  }
}

export default Home;
