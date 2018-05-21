import React, { Component } from "react";
import { View, Text, AlertIOS } from "react-native";
import { Button } from "react-native-elements";

class Alert extends Component {
  state = {
    countDown: "5"
  };
  handleAlert = () => {
    AlertIOS.alert("Sending Alert In...", this.state.countDown, [
      { text: "Cancel", style: "destructive" }
    ]);
    // setTimeout(()=>this.setState({countDown: '4'})
    // ,1000)
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#333",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          style={{ width: 200 }}
          buttonStyle={{
            backgroundColor: "blue",
            height: 70,
            borderRadius: 10
          }}
          raised
          title="ALERT"
          onPress={this.handleAlert}
        />
      </View>
    );
  }
}
export default Alert;
