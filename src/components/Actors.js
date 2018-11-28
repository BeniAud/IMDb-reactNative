import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

class Actors extends React.Component {
  render() {
    return (
      <View style={styles.castActor}>
        <Text style={styles.actorName}>{this.props.name}</Text>
        <Text style={styles.actor}>{this.props.role}</Text>
      </View>
    );
  }
}

export default Actors;
//---------casting Acteur------------------//
const styles = StyleSheet.create({
  castActor: {
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: "#333333"
  },
  actorName: {
    paddingTop: 10,
    color: "white",
    fontSize: 14,
    textAlign: "left",
    paddingLeft: 10
  },
  actor: {
    color: "#cbcbcb",
    fontSize: 14,
    textAlign: "left",
    paddingLeft: 10
  }
});
