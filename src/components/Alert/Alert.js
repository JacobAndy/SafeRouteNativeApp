import React, { Component } from "react";
import { View, Text, AlertIOS } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { updateUserLocation } from "../../Ducks/userReducer";

class Alert extends Component {
  state = {
    countDown: "5"
  };
  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.props.updateUserLocation(
    //       position.coords.latitude,
    //       position.coords.longitude
    //     );
    //   },
    //   err => alert(err),
    //   { timeout: 60000, enableHighAccuracy: true, maximumAge: 60000 }
    // );
    // var id = navigator.geolocation.watchPosition(
    //   pos => {
    //     console.log(pos.coords.latitude, pos.coords.longitude);
    //     this.props.updateUserLocation(
    //       pos.coords.latitude,
    //       pos.coords.longitude
    //     );
    //   },
    //   err => {
    //     console.log(`ERROR IN WATCHING POSITION: ${err}`);
    //   },
    //   { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    // );
  }
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(id);
  // }
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
let mapStateToProps = state => state;
export default connect(mapStateToProps, { updateUserLocation })(Alert);
