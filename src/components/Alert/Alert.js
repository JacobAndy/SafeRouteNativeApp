import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class Alert extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>ALERT PAGE</Text>
      </View>
    );
  }
}
let mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, {})(Alert);
