import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "whitesmoke"
        }}
      >
        <Card title="Sign In">
          <FormLabel>User Name</FormLabel>
          <FormInput placeholder="User Name..." />
          <FormLabel>Password</FormLabel>
          <FormInput placeholder="Password..." />
          <View
            style={{
              marginTop: 18,
              alignItems: "center",
              justifyContent: "space-around",
              height: 120
            }}
          >
            <Button style={{ width: 150 }} raised title="Sign In" />
            <Button
              style={{ width: 150 }}
              raised
              title="Sign Up"
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            />
          </View>
        </Card>
      </View>
    );
  }
}
export default SignIn;
