import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";

class SignUp extends Component {
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
        <Card title="Sign Up">
          <FormLabel>User Name</FormLabel>
          <FormInput placeholder="User Name..." />
          <FormLabel>First Name</FormLabel>
          <FormInput placeholder="First Name..." />
          <FormLabel>Last Name</FormLabel>
          <FormInput placeholder="Last Name..." />
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email..." />
          <FormLabel>Phone Number</FormLabel>
          <FormInput placeholder="Phone Number..." />
          <FormLabel>Password</FormLabel>
          <FormInput placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput placeholder="Confirm Password..." />
          <Button style={{ marginTop: 18 }} title="Sign Up" />
        </Card>
      </View>
    );
  }
}
export default SignUp;
