import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
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
            source={require("../../images/interstellar.jpg")}
          />
          <View style={styles.movieAdd}>
            <Text numberOfLines={3} style={styles.synopsis}>
              A team of explores travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                height: 30,
                width: 220,
                fontWeight: "bold",
                marginLeft: 20,
                marginBottom: 40,
                borderRadius: 3,
                backgroundColor: "#146cb2"
              }}
            >
              <Text style={styles.buttonAdd}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerIcons}>
          <View style={styles.icon}>
            <Image
              style={{ marginLeft: 5, width: 30, height: 30 }}
              source={require("../../images/starGold.png")}
            />
            <Text style={styles.iconsTitle}>8.6/10</Text>
            <Text style={styles.iconsText}>1.1M</Text>
          </View>
          <View style={styles.icon}>
            <Image
              style={{
                marginLeft: 20,
                width: 30,
                height: 30
              }}
              source={require("../../images/starEmpty.png")}
            />
            <Text style={styles.iconsTitle}>RATE THIS</Text>
            <Text style={styles.iconsText} />
          </View>
          <View style={styles.icon}>
            <TouchableHighlight
              onPress={() => {}}
              style={{
                marginLeft: 20,
                width: 30,
                height: 30,
                backgroundColor: "#66CC33"
              }}
            >
              <Text style={styles.Metascore}>74</Text>
            </TouchableHighlight>

            <Text style={styles.iconsTitle}>Metascore</Text>
            <Text style={styles.iconsText}>46 critic reviews</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CardMovie;

const styles = StyleSheet.create({
  //-----container carte film-------------//
  movieCard: {
    backgroundColor: "rgb(33,33,33)",
    marginBottom: 10,
    paddingBottom: 10
  },
  title: {
    color: "white",
    marginTop: 30,
    marginLeft: 10,
    fontSize: 40
  },
  description: {
    color: "#cbcbcb",
    marginLeft: 10,
    marginTop: 20,
    fontSize: 14
  },
  //-------carte affiche + synopis----/
  movie: {
    flexDirection: "row"
  },
  synopsis: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 20,

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

  //--------icones note et metascore----------//
  containerIcons: {
    marginLeft: 20,
    marginTop: 40,
    paddingBottom: 20,
    flexDirection: "row"
  },

  icon: {
    justifyContent: "space-between",
    marginLeft: 20,
    width: 100,
    paddingBottom: 10
  },
  Metascore: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    paddingTop: 7
  },
  iconsTitle: {
    paddingTop: 7,
    color: "white",
    justifyContent: "space-between"
  },
  iconsText: {
    fontSize: 10,
    color: "#cbcbcb"
  }
  //-------------------------------------//
});
