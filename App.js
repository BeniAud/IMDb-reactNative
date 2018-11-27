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
        <View style={styles.castingName}>
          <View style={styles.casting}>
            <Text style={styles.titleActor}>Top Billed Cast</Text>
            <Text style={styles.SeeAll}>SEE ALL</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.castActor}>
              <Image
                style={{
                  paddingRight: 10,
                  marginRight: 10,
                  width: 150,
                  height: 200
                }}
                source={require("./images/matthew.jpg")}
              />
              <Text style={styles.actorName}>matthew</Text>
              <Text style={styles.actor}>Cooper</Text>
            </View>
            <View style={styles.castActor}>
              <Image
                style={{
                  paddingRight: 10,
                  marginRight: 10,
                  width: 150,
                  height: 200
                }}
                source={require("./images/anna.jpg")}
              />
              <Text style={styles.actorName}>Anna</Text>
              <Text style={styles.actor}>Brand</Text>
            </View>
            <View style={styles.castActor}>
              <Image
                style={{
                  paddingRight: 10,
                  marginRight: 10,
                  width: 150,
                  height: 200
                }}
                source={require("./images/jessica.jpg")}
              />
              <Text style={styles.actorName}>Jessica</Text>
              <Text style={styles.actor}>Murph</Text>
            </View>
          </ScrollView>
          <View style={styles.containerDirector}>
            <Text style={styles.directorWriters}>Director</Text>
            <Text style={styles.nameDirectors}>Christopher Nolan</Text>
            <Text style={styles.directorWriters}>Writers</Text>
            <Text style={styles.nameWriters}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    backgroundColor: "#333333"
  },
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
  container: {
    flexGrow: 1,
    backgroundColor: "#000000"
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
  },
  titleActor: {
    color: "white",
    marginTop: 30,
    marginLeft: 10,
    fontSize: 30
  },
  SeeAll: {
    color: "#4267b2",
    fontSize: 15,
    paddingTop: 45,
    paddingRight: 20
  },
  castingName: {
    backgroundColor: "rgb(33,33,33)"
  },
  casting: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  actorName: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },
  castActor: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#333333"
  },
  actor: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },
  directorWriters: {
    color: "white",
    marginTop: 30,
    marginLeft: 10,
    fontSize: 20
  },
  nameDirectors: {
    color: "white",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15
  },
  nameWriters: {
    color: "white",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15
  },
  containerDirector: {
    paddingBottom: 20
  }
});
