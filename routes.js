import React from "react";
import { Platform, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignUp from "./src/SignUp/SignUp";
import SignIn from "./src/SignIn/SignIn";

import Profile from "./src/Profile/Profile";
import Social from "./src/Social/Social";
import Alert from "./src/Alert/Alert";

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

const RootNavigator = () => {
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
      initialRouteName: this.props.userReducer.signedIn
        ? "SignedIn"
        : "SignedOut"
    }
  );
};
console.log(this.props);

// let mapStateToProps = state => state;
// export default connect(mapStateToProps, {})(RootNavigator);
