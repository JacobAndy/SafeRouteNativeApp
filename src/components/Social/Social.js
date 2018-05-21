import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { updateUserLocation } from "../../Ducks/userReducer";

class Social extends Component {
  state = {};
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.updateUserLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      err => alert(err),
      { timeout: 60000, enableHighAccuracy: true, maximumAge: 60000 }
    );
    var id = navigator.geolocation.watchPosition(
      pos => {
        console.log(pos.coords.latitude, pos.coords.longitude);
        this.props.updateUserLocation(
          pos.coords.latitude,
          pos.coords.longitude
        );
      },
      err => {
        console.log(`ERROR IN WATCHING POSITION: ${err}`);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(id);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Social Page</Text>
      </View>
    );
  }
}
let mapStateToProps = state => state;
export default connect(mapStateToProps, { updateUserLocation })(Social);
