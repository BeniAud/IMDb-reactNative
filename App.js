/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import CardMovie from "./CardMovie";
import CardCasting from "./CardCasting";
import CardHeader from "./CardHeader";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

// <View style={{backgroundColor:"#212121", width:100, height:20}}></View>

export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <CardHeader />
        <CardMovie />
        <CardCasting />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000000"
  }
});
