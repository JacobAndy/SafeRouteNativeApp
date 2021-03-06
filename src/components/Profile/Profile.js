import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { updateUserLocation } from "../../Ducks/userReducer";
import _ from "lodash.map";

class Profile extends Component {
  state = {};
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
    //   var id = navigator.geolocation.watchPosition(
    //     pos => {
    //       console.log(pos.coords.latitude, pos.coords.longitude);
    //       this.props.updateUserLocation(
    //         pos.coords.latitude,
    //         pos.coords.longitude
    //       );
    //     },
    //     err => {
    //       console.log(`ERROR IN WATCHING POSITION: ${err}`);
    //     },
    //     { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    //   );
  }
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(id);
  // }
  render() {
    let {
      first_name,
      last_name,
      user_name,
      phone_number,
      user_email
    } = this.props.userReducer.user;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#333"
        }}
      >
        <Text style={{ top: 115, color: "white", fontSize: 25 }}>
          {user_name}
        </Text>
        <View
          style={{
            borderRadius: 300,
            bottom: 0,
            backgroundColor: "#1976D2",
            width: "150%",
            height: "75%",
            bottom: -130,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: 25
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {first_name} {last_name}
          </Text>
          <Text style={{ marginTop: 40, color: "white", fontSize: 20 }}>
            Test
            {user_email}
          </Text>
          <Text style={{ marginTop: 40, color: "white", fontSize: 20 }}>
            {phone_number}
          </Text>
          {/* <Text style={{ marginTop: 40, color: "white", fontSize: 20 }}>
          Profile
        </Text>
        <Text style={{ marginTop: 40, color: "white", fontSize: 20 }}>
          Profile
        </Text>
        <Text style={{ marginTop: 40, color: "white", fontSize: 20 }}>
          Profile
        </Text> */}
        </View>
      </View>
    );
  }
}
let mapStateToProps = state => state;
export default connect(mapStateToProps, { updateUserLocation })(Profile);
