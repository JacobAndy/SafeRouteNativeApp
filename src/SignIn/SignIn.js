import React, { Component } from "react";
import {
  Card,
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";
import { View } from "react-native";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    userNameError: false,
    passwordError: false
  };
  handleSignIn = () => {};
  render() {
    console.log(this.props);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "whitesmoke"
        }}
      >
        <Card title="Sign In">
          <FormLabel
            labelStyle={this.state.userNameError ? { color: "red" } : null}
          >
            User Name
          </FormLabel>
          <FormInput
            // clearTextOnFocus={true}
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="User Name..."
            shake={this.state.userNameError}
            containerStyle={
              this.state.userNameError ? { borderBottomColor: "red" } : null
            }
          />
          <FormLabel
            labelStyle={this.state.passwordError ? { color: "red" } : null}
          >
            Password
          </FormLabel>
          <FormInput
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="Password..."
            shake={this.state.passwordError}
            containerStyle={
              this.state.passwordError ? { borderBottomColor: "red" } : null
            }
          />
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
let mapStateToProps = state => state;
export default connect(mapStateToProps)(SignIn);
