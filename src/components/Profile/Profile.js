import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Profile extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>PROFILE PAGE</Text>
      </View>
    );
  }
}
let mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, {})(Profile);
