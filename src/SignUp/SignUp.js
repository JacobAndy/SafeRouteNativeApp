import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View, AlertIOS } from "react-native";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userNameRegex = new RegExp("^[a-zA-Z0-9_-]{3,15}$");

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

class SignUp extends Component {
  state = {
    userNameError: false,
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneNumberError: false,
    passwordError: false,
    passwordConfirmError: false,
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
  };
  handleSignUp = () => {
    let {
      userNameError,
      firstNameError,
      lastNameError,
      emailError,
      phoneNumberError,
      passwordError,
      passwordConfirmError,
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      passwordConfirm
    } = this.state;
    let error = false;
    if (!userName || userName.match(userNameRegex) === null) {
      this.setState({ userNameError: true });
      error = true;
    } else {
      this.setState({ userNameError: false });
    }
    if (!email || email.match(emailRegex) === null) {
      this.setState({ emailError: true });
      error = true;
    } else {
      this.setState({ emailError: false });
    }
    if (!firstName || firstName.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ firstNameError: true });
      error = true;
    } else {
      this.setState({ firstNameError: false });
    }
    if (!lastName || lastName.match(/^[a-zA-Z]+$/) === null) {
      this.setState({ lastNameError: true });
      error = true;
    } else {
      this.setState({ lastNameError: false });
    }
    if (phoneNumber.length < 10 || phoneNumber.match(/^[0-9]*$/) === null) {
      this.setState({ phoneNumberError: true });
      error = true;
    } else {
      this.setState({ phoneNumberError: false });
    }
    if (
      !password ||
      password !== passwordConfirm ||
      password.match(passwordRegex) === null
    ) {
      this.setState({ passwordError: true });
      error = true;
    } else {
      this.setState({ passwordError: false });
    }
    if (
      !passwordConfirm ||
      password !== passwordConfirm ||
      passwordConfirm.match(passwordRegex) === null
    ) {
      this.setState({ passwordConfirmError: true });
      error = true;
      if (error) {
        return null;
      }
    } else {
      this.setState({ passwordConfirmError: false });
      if (error) {
        return null;
      }
    }
    console.log("everything looks good!");
    AlertIOS.alert("Account Created!", "Click Here To Go Back!", [
      { text: "OK", onPress: () => this.props.navigation.goBack() }
    ]);
  };
  render() {
    let {
      userNameError,
      firstNameError,
      lastNameError,
      emailError,
      phoneNumberError,
      passwordError,
      passwordConfirmError,
      userName,
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      passwordConfirm
    } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "whitesmoke"
        }}
      >
        <Card title="Sign Up">
          <FormLabel labelStyle={userNameError ? { color: "red" } : null}>
            User Name
          </FormLabel>
          <FormInput
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            returnKeyType="done"
            value={userName}
            onChangeText={text => {
              this.setState({ userName: text });
            }}
            placeholder="User Name..."
            shake={userNameError}
            containerStyle={userNameError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={firstNameError ? { color: "red" } : null}>
            First Name
          </FormLabel>
          <FormInput
            keyboardType="name-phone-pad"
            returnKeyType="done"
            value={firstName}
            onChangeText={text => {
              this.setState({ firstName: text });
            }}
            placeholder="First Name..."
            shake={firstNameError}
            containerStyle={
              firstNameError ? { borderBottomColor: "red" } : null
            }
          />
          <FormLabel labelStyle={lastNameError ? { color: "red" } : null}>
            Last Name
          </FormLabel>
          <FormInput
            keyboardType="name-phone-pad"
            returnKeyType="done"
            value={lastName}
            onChangeText={text => {
              this.setState({ lastName: text });
            }}
            placeholder="Last Name..."
            shake={lastNameError}
            containerStyle={lastNameError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={emailError ? { color: "red" } : null}>
            Email
          </FormLabel>
          <FormInput
            autoCapitalize="none"
            returnKeyType="done"
            keyboardType="email-address"
            value={email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            placeholder="Email..."
            shake={emailError}
            containerStyle={emailError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={phoneNumberError ? { color: "red" } : null}>
            Phone Number
          </FormLabel>
          <FormInput
            returnKeyType="done"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={text => {
              this.setState({ phoneNumber: text });
            }}
            placeholder="Phone Number..."
            shake={phoneNumberError}
            containerStyle={
              phoneNumberError ? { borderBottomColor: "red" } : null
            }
          />
          <FormLabel labelStyle={passwordError ? { color: "red" } : null}>
            Password
          </FormLabel>
          <FormInput
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            returnKeyType="done"
            secureTextEntry={true}
            value={password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            placeholder="Password..."
            shake={passwordError}
            containerStyle={passwordError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel
            labelStyle={passwordConfirmError ? { color: "red" } : null}
          >
            Confirm Password
          </FormLabel>
          <FormInput
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            returnKeyType="done"
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={text => {
              this.setState({ passwordConfirm: text });
            }}
            placeholder="Confirm Password..."
            shake={passwordConfirmError}
            containerStyle={
              passwordConfirmError ? { borderBottomColor: "red" } : null
            }
          />
          <Button
            style={{ marginTop: 18 }}
            title="Sign Up"
            onPress={this.handleSignUp}
          />
        </Card>
      </View>
    );
  }
}
export default SignUp;
