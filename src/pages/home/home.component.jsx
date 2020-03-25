import React from "react";

//components
import Navbar from "../../components/navbar/navbar.component";
import Quester from "../../components/quester/quester.component";

//styles
import "./home.styles.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content-container">
          <Navbar />
          <Quester />
        </div>
      </div>
    );
  }
}

export default Home;
