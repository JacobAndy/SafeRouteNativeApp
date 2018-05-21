import React from "react";
import { Platform, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignUp from "./src/components/SignUp/SignUp";
import SignIn from "./src/components/SignIn/SignIn";

import Profile from "./src/components/Profile/Profile";
import Social from "./src/components/Social/Social";
import Alert from "./src/components/Alert/Alert";

console.log(this.props);

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
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
    initialRouteName: "Alert"
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
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
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
