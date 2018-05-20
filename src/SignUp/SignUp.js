import React, { Component } from "react";
import { Card, FormLabel, FormInput, Button } from "react-native-elements";
import { View } from "react-native";

class SignUp extends Component {
  state = {
    userNameError: false,
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneNumberError: false,
    passwordError: false,
    passwordConfirmError: false
  };
  handleSignUp = () => {};
  render() {
    let {
      userNameError,
      firstNameError,
      lastNameError,
      emailError,
      phoneNumberError,
      passwordError,
      passwordConfirmError
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
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="User Name..."
            shake={userNameError}
            containerStyle={userNameError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={firstNameError ? { color: "red" } : null}>
            First Name
          </FormLabel>
          <FormInput
            onChangeText={text => {
              console.log(text);
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
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="Last Name..."
            shake={lastNameError}
            containerStyle={lastNameError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={emailError ? { color: "red" } : null}>
            Email
          </FormLabel>
          <FormInput
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="Email..."
            shake={emailError}
            containerStyle={emailError ? { borderBottomColor: "red" } : null}
          />
          <FormLabel labelStyle={phoneNumberError ? { color: "red" } : null}>
            Phone Number
          </FormLabel>
          <FormInput
            onChangeText={text => {
              console.log(text);
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
            onChangeText={text => {
              console.log(text);
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
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="Confirm Password..."
            shake={passwordConfirmError}
            containerStyle={
              passwordConfirmError ? { borderBottomColor: "red" } : null
            }
          />
          <Button style={{ marginTop: 18 }} title="Sign Up" />
        </Card>
      </View>
    );
  }
}
export default SignUp;
