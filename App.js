import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createRootNavigator } from "./routes";
import { Provider } from "redux";
import store from "./store";
import SignIn from "./src/components/SignIn/SignIn";

class App extends React.Component {
  componentDidMount() {}
  render() {
    //this is telling me whether or not we have checked.
    //initially will be false
    // if (!checkedSignedIn) {
    //   return null;
    // }

    //this will be either true or false
    //initially will be false
    const Layout = createRootNavigator((SignIn = false));
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
export default App;
