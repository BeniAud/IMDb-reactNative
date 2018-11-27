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

class CardHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={{
            marginLeft: 10,
            tintColor: "white",
            width: 60,
            height: 60
          }}
          source={require("./images/imdb.png")}
        />
      </View>
    );
  }
}

export default CardHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    backgroundColor: "#333333"
  }
});
