import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Menu from "../../components/menu/menu.component";
import Quester from "../../components/quester/quester.component";
import Solution from "../../components/solution/solution.component";

//redux
import {
  selectJavaScript,
  selectSolution
} from "../../redux/home/home.selectors";

//styles
import "./home.styles.scss";

class Home extends React.Component {
  render() {
    const { jsVisible, solutionVisible } = this.props;

    //for more var
    let show = false;
    if (jsVisible) show = true;

    return (
      <div className="container">
        {!solutionVisible ? (
          <div className="content-container">
            <Menu />
            {show ? <Quester /> : null}
          </div>
        ) : null}
        {solutionVisible ? <Solution /> : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jsVisible: selectJavaScript,
  solutionVisible: selectSolution
});

export default connect(mapStateToProps)(Home);
