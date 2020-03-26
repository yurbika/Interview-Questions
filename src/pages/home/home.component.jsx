import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//components
import Menu from "../../components/menu/menu.component";
import Quester from "../../components/quester/quester.component";
import Solution from "../../components/solution/solution.component";
import Navigation from "../../components/navigation/navigation.component";

//redux
import {
  selectJavaScript,
  selectSolution
} from "../../redux/home/home.selectors";

//styles
import { Container, Content } from "./home.styles";

class Home extends React.Component {
  render() {
    const { jsVisible, solutionVisible } = this.props;

    //for more var
    let show = false;
    if (jsVisible) show = true;

    return (
      <Container>
        {!solutionVisible ? (
          <Content>
            <Menu />
            {show ? <Quester /> : null}
            <Navigation />
          </Content>
        ) : null}
        {solutionVisible ? <Solution /> : null}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jsVisible: selectJavaScript,
  solutionVisible: selectSolution
});

export default connect(mapStateToProps)(Home);
