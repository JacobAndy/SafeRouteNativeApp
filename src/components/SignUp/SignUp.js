import React, { Component } from "react";
import { View, Card, FormLabel, FormInput, Button } from "react-native";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <View>
        <Card title="SIGN UP">
          <FormLabel>UserName</FormLabel>
          <FormInput placeholder="User Name..." />
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email..." />
          <FormLabel>First Name</FormLabel>
          <FormInput placeholder="First Name..." />
          <FormLabel>Last Name</FormLabel>
          <FormInput placeholder="Last Name..." />
          <FormLabel>Phone Number</FormLabel>
          <FormInput placeholder="Phone Number..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />
          <Button
            title="SIGN UP"
            onPress={() => this.props.navigation.navigate("SignedIn")}
          />
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("SignIn")}
          />
        </Card>
      </View>
    );
  }
}
export default SignUp;
