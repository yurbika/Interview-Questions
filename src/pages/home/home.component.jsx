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
  selectQuestions,
  selectSolution
} from "../../redux/home/home.selectors";

//styles
import { Container, Content } from "./home.styles";

class Home extends React.Component {
  render() {
    const { questionsVisible, solutionVisible } = this.props;

    return (
      <Container>
        {!solutionVisible ? (
          <Content>
            <Menu />
            {questionsVisible ? <Quester /> : null}
          </Content>
        ) : null}
        {solutionVisible ? (
          <Navigation />
        ) : questionsVisible ? (
          <Navigation />
        ) : null}
        {true ? <Solution /> : null}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  questionsVisible: selectQuestions,
  solutionVisible: selectSolution
});

export default connect(mapStateToProps)(Home);
