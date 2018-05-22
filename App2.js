import { createRootNavigator } from "./routes";
import React, { Component } from "react";
import { connect } from "react-redux";

class App2 extends Component {
  render() {
    console.log(this.props);
    let getVal = this.props.userReducer.user ? true : false;
    let Layout = createRootNavigator(getVal);

    return <Layout />;
  }
}
let mapStateToProps = state => state;
export default connect(mapStateToProps, {})(App2);
