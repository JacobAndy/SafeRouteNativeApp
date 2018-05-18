import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from "react-navigation";

import Profile from "./src/components/Profile/Profile";
import Social from "./src/components/Social/Social";
import Alert from "./src/components/Alert/Alert";
import SignUp from "./src/components/SignUp/SignUp";
import SignIn from "./src/components/SignIn/SignIn";
import { connect } from "react-redux";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SingedIn = TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
        // tabBarIcon:
      }
    },
    Alert: {
      screen: Alert,
      navigationOptions: {
        tabBarLabel: "Alert"
        // tabBarIcon:
      }
    },
    Social: {
      screen: Social,
      navigationOptions: {
        tabBarLabel: "Social"
        // tabBarIcon:
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (initialSignedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      //if user is signed in the initial Route will be SignedIn, otherwise the initial route is SignedOut
      initialRouteName: initialSignedIn ? "SignedIn" : "SignedOut"
    }
  );
};
