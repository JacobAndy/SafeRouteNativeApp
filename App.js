import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";
import { createRootNavigator, SignedOut } from "./routes";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    signedIn: !false
  };

  render() {
    let { signedIn } = this.state;
    let Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
