import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Social extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>SOCIAL PAGE</Text>
      </View>
    );
  }
}
let mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, {})(Social);
