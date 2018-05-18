import React, { Component } from "react";
import { View, Card, FormLabel, FormInput, Button } from "react-native";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card title="Sign In">
          <FormLabel>User Name</FormLabel>
          <FormInput placeholder="User Name..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("SignedIn")}
          />
        </Card>
      </View>
    );
  }
}
export default SignIn;
