/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import CardMovie from "./src/components/CardMovie";
import CardCasting from "./src/components/CardCasting";
import CardHeader from "./src/components/CardHeader";
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
