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

class CardCasting extends React.Component {
  render() {
    return (
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
    );
  }
}
export default CardCasting;

const styles = StyleSheet.create({
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
