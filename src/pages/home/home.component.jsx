import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Navbar from "../../components/navbar/navbar.component";
import Quester from "../../components/quester/quester.component";

//redux
import { selectJavaScript } from "../../redux/home/home.selectors";

//styles
import "./home.styles.scss";

class Home extends React.Component {
  render() {
    const { javaScriptQuestionsVisible } = this.props;
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

const mapStateToProps = createStructuredSelector({
  javaScriptQuestionsVisible: selectJavaScript
});

export default connect(mapStateToProps)(Home);
