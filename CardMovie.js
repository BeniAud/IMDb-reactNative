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

class CardMovie extends React.Component {
  render() {
    return (
      <View style={styles.movieCard}>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.description}>
          2014 PG-13 2h49mm Adventure, Drama, Sci-Fi
        </Text>
        <View style={styles.movie}>
          <Image
            style={{ width: 100, height: 150, marginTop: 30, marginLeft: 10 }}
            source={require("./images/interstellar.jpg")}
          />
          <View style={styles.movieAdd}>
            <Text style={styles.synopsis}>
              A team of explores travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                height: 30,
                width: 200,
                marginLeft: 20,
                marginBottom: 40,
                borderRadius: 3,
                backgroundColor: "#4267b2"
              }}
            >
              <Text style={styles.buttonAdd}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.icons}>
          <View style={styles.iconStarYellow}>
            <Image
              style={{ marginLeft: 5, width: 30, height: 30 }}
              source={require("./images/starGold.png")}
            />
            <Text style={styles.iconsText}>8.6/10</Text>
            <Text style={styles.iconsSSText}>1.1M</Text>
          </View>
          <View style={styles.iconStar}>
            <Image
              style={{
                marginLeft: 20,
                width: 30,
                height: 30
              }}
              source={require("./images/starEmpty.png")}
            />
            <Text style={styles.iconsText}>RATE THIS</Text>
          </View>
          <View style={styles.iconMetascore}>
            <Image
              style={{
                marginLeft: 20,
                width: 30,
                height: 30,
                backgroundColor: "white"
              }}
              source={require("./images/starEmpty.png")}
            />
            <Text style={styles.iconsText}>Metascore</Text>
            <Text style={styles.iconsSSText}>46 critic reviews</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CardMovie;

const styles = StyleSheet.create({
  title: {
    color: "white",
    marginTop: 30,
    marginLeft: 10,
    fontSize: 40
  },
  description: {
    color: "white",
    marginLeft: 10,
    marginTop: 20,
    fontSize: 11
  },
  movieCard: {
    backgroundColor: "rgb(33,33,33)",
    marginBottom: 10,
    paddingBottom: 10
  },
  movie: {
    flexDirection: "row"
  },
  synopsis: {
    color: "white",
    fontSize: 14,
    paddingRight: 50,
    paddingLeft: 20,
    marginTop: 30,
    textAlign: "justify",
    flex: 1
  },
  movieAdd: {
    flexDirection: "column",
    flex: 1
  },

  buttonAdd: {
    paddingTop: 5,
    color: "white",
    textAlign: "center"
  },
  icons: {
    marginLeft: 20,
    marginTop: 40,
    flexDirection: "row"
  },
  iconsText: {
    color: "white"
  },
  iconStarYellow: {
    marginLeft: 20,
    width: 100
  },
  iconStar: {
    marginLeft: 20,
    width: 100
  },
  iconMetascore: {
    marginLeft: 20,
    width: 100
  },
  iconsSSText: {
    fontSize: 10,
    color: "gray"
  }
});
