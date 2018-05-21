import React, { Component } from "react";
import { View, Text } from "react-native";

class Profile extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#333"
        }}
      >
      
        <Text style={{top:115,color: 'white',fontSize: 25}}>User Name</Text>
        <View
          style={{
            borderRadius: 300,
            bottom: 0,
            backgroundColor: "#1976D2",
            width: "150%",
            height: "75%",
            bottom: -130,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop:25
          }}
        >
          <Text style={{color:'white',fontSize: 20}}>Full Name</Text>
          <Text style={{marginTop: 40,color:'white',fontSize: 20}}>Email</Text>
          <Text style={{marginTop: 40, color:'white',fontSize: 20}}>Phone Number</Text>
          <Text style={{marginTop: 40,color:'white',fontSize: 20}}>Profile</Text>
          <Text style={{marginTop: 40,color:'white',fontSize: 20}}>Profile</Text>
          <Text style={{ marginTop: 40,color:'white',fontSize: 20}}>Profile</Text>
        </View>
      </View>
    );
  }
}
export default Profile;
