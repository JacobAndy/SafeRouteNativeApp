import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";
import RootNavigator, { SignedOut } from "./routes";
import { connect } from "react-redux";

class App extends Component {
  state = {};
  render() {
    return <SignedOut />;
  }
}
export default App;
