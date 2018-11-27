import React, { Component } from "react";
import {
  Image,
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
          <Text style={styles.titleCast}>Top Billed Cast</Text>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <Text style={styles.SeeAll}>SEE ALL</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.castActor}>
            <Image
              style={{
                width: 150,
                height: 200
              }}
              source={require("./images/matthew.jpg")}
            />
            <Text style={styles.actorName}>Matthew McCon...</Text>
            <Text style={styles.actor}>Cooper</Text>
          </View>
          <View style={styles.castActor}>
            <Image
              style={{
                width: 150,
                height: 200
              }}
              source={require("./images/anna.jpg")}
            />
            <Text style={styles.actorName}>Anna Hathaway</Text>
            <Text style={styles.actor}>Brand</Text>
          </View>
          <View style={styles.castActor}>
            <Image
              style={{
                width: 150,
                height: 200
              }}
              source={require("./images/jessica.jpg")}
            />
            <Text style={styles.actorName}>Jessica Chastain</Text>
            <Text style={styles.actor}>Murph</Text>
          </View>
        </ScrollView>
        <View style={styles.containerDirector}>
          <Text style={styles.directorWriters}>Director</Text>
          <Text style={styles.descriptionDW}>Christopher Nolan</Text>
          <Text style={styles.directorWriters}>Writers</Text>
          <Text style={styles.descriptionDW}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    );
  }
}
export default CardCasting;

const styles = StyleSheet.create({
  //----container acteurs---------------------//

  castingName: {
    backgroundColor: "rgb(33,33,33)"
  },

  // titre de la partie  casting-----------//
  casting: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleCast: {
    color: "white",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 30
  },
  SeeAll: {
    color: "#146cb2",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 35,
    paddingRight: 20
  },
  //---------casting Acteur------------------//

  castActor: {
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 20,
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
  },

  //------description director et writer-----------//
  containerDirector: {
    paddingBottom: 20
  },

  directorWriters: {
    color: "white",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20
  },
  descriptionDW: {
    color: "#cbcbcb",
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15
  }
});
