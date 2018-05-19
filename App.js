import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";
import { createRootNavigator, SignedOut } from "./routes";
import { connect } from "react-redux";

class App extends Component {
  state = {
    signedIn: false
  };
  render() {
    let { signedIn } = this.state;
    let Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
export default App;
