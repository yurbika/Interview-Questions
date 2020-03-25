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
    const { jsVisible } = this.props;

    //for more var
    let show = false;
    if (jsVisible) show = true;

    return (
      <div className="container">
        <div className="content-container">
          <Navbar />
          {show ? <Quester /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jsVisible: selectJavaScript
});

export default connect(mapStateToProps)(Home);
