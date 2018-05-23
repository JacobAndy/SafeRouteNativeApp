import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { updateUserLocation } from "../../Ducks/userReducer";
import { List, ListItem } from "react-native-elements";

class Social extends Component {
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
    return (
      <View
        style={{
          backgroundColor: "#999",
          flex: 1,
          justifyContent: "flex-start",
          marginTop: 50
        }}
      >
        <List>
          <ListItem
            onPress={() => console.log("hello world")}
            title="Groups"
            chevronColor="blue"
            leftIcon={{ name: "people" }}
          />
          <ListItem
            onPress={() => console.log("hello world")}
            title="Primary Locations"
            chevronColor="blue"
            leftIcon={{ name: "home" }}
          />
          <ListItem
            onPress={() => console.log("hello world")}
            title="Invite Friends"
            chevronColor="blue"
            leftIcon={{ name: "person" }}
          />
        </List>
        {/* <View
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#333",
            height: 10
          }}
        > */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            textAlign: "center"
          }}
        >
          Dependencies
        </Text>
        {/* </View> */}
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <List>
            <ListItem
              roundAvatar
              onPress={() => console.log("hello world")}
              title="test"
              chevronColor="blue"
            />
            <ListItem
              roundAvatar
              onPress={() => console.log("hello world")}
              title="test"
              chevronColor="blue"
            />
            <ListItem
              roundAvatar
              onPress={() => console.log("hello world")}
              title="test"
              chevronColor="blue"
            />
          </List>
        </View>
      </View>
    );
  }
}
let mapStateToProps = state => state;
export default connect(mapStateToProps, { updateUserLocation })(Social);
