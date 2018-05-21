import React, { Component } from "react";
import {
  Card,
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";
import { View, Text } from "react-native";
import { connect } from "react-redux";

const userNameRegex = new RegExp("^[a-zA-Z0-9_-]{3,15}$");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

class SignIn extends Component {
  state = {
    userName: "",
    password: "",
    userNameError: false,
    passwordError: false
  };
  handleSignIn = () => {
    let { userName, password } = this.state;
    if (!userName || userName.match(userNameRegex) === null) {
      this.setState({ userNameError: true });
    } else {
      this.setState({ userNameError: false });
    }
    if (!password || password.match(passwordRegex) === null) {
      this.setState({ passwordError: true });
    } else {
      this.setState({ passwordError: false });
    }
  };
  handleTransition = () => {
    this.setState({
      userName: "",
      password: "",
      passwordError: false,
      userNameError: false
    });
    this.props.navigation.navigate("SignUp");
  };
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
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Safe Route</Text>
        </View>
        <Card title="Sign In">
          <FormLabel
            labelStyle={this.state.userNameError ? { color: "red" } : null}
          >
            User Name
          </FormLabel>
          <FormInput
            autoCapitalize="none"
            returnKeyType="done"
            keyboardType="name-phone-pad"
            value={this.state.userName}
            onChangeText={text => {
              this.setState({ userName: text });
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
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            returnKeyType="done"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({ password: text });
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
            <Button
              style={{ width: 150 }}
              raised
              title="Sign In"
              onPress={this.handleSignIn}
            />
            <Button
              style={{ width: 150 }}
              raised
              title="Sign Up"
              onPress={this.handleTransition}
            />
          </View>
        </Card>
      </View>
    );
  }
}
let mapStateToProps = state => state;
export default connect(mapStateToProps)(SignIn);
