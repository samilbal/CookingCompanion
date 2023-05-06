import React from "react"
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { Button } from "react-native-paper"

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item: item })}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imageBackground}
        >
          <View style={styles.view}>
            <View style={styles.topContainer}>
              <Text style={styles.topTitle}> {item.cuisineType[0]} </Text>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.label}
                </Text>
                <Text style={styles.subtitle}> {item.dishType[0]} </Text>
              </View>
            </View>
          </View>
          <Button
            icon="heart"
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.buttonStyle}
            contentStyle={styles.buttonContentStyle}
          >
            Fav
          </Button>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderColor: "rgba(156,40,60,0.8)",
    // borderWidth: 9,
    // borderRadius: 12,
  },
  imageBackground: {
    height: 290,
    width: 290,
    borderRadius: 50,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  view: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(1,0,0,0.5)",
  },
  topContainer: {
    marginTop: 10,
    paddingLeft: 25,
    paddingVertical: 3,
    backgroundColor: "rgba(1,0,0,0.7)",
    width: 150,
    borderTopRightRadius: 12,
  },
  topTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  bottomContainer: {
    paddingLeft: 25,
    paddingBottom: 35,
    backgroundColor: "rgba(19,15,26,0.4)",
    borderTopRightRadius: 24,
    flexDirection: "row",
  },
  buttonStyle: {
    width: 80,
    height: 35,
    justifyContent: "center",
    position: "absolute",
    right: 5,
    bottom: 10,
    backgroundColor: "rgba(156,40,60,0.8)",
  },
  buttonContentStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    height: 40,
    width: 75,
  },
})

export default Card
