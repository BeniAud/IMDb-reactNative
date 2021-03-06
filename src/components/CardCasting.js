import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Actors from "./Actors";
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
            <Image />
            <Image
              style={styles.imageActor}
              source={require("../../images/matthew.jpg")}
            />
            <Actors name="Matthew McC..." role="Cooper" />
          </View>
          <View style={styles.castActor}>
            <Image
              style={styles.imageActor}
              source={require("../../images/anna.jpg")}
            />
            <Actors name="Anne Hathaway" role="Brand" />
          </View>
          <View style={styles.castActor}>
            <Image
              style={styles.imageActor}
              source={require("../../images/jessica.jpg")}
            />
            <Actors name="Jessica Chastain" role="Murph" />
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
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: "#333333"
  },
  imageActor: {
    width: 150,
    height: 200
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
