import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

function Background(props) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          style={styles.Background}
          source={require("../images/custome-circles-mbg-4.png")}
        />
      </View>
      <View>
        <ImageBackground
          style={styles.mag}
          source={require("../images/custome-mbg-1.png")}
        />
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", top: 750 }}>
        <ImageBackground
          style={styles.mag2}
          source={require("../images/custome-bg-0.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Background: {
    position: "absolute",
    top: "10%",
    width: "100%",
    height: 1100,
  },
  mag: {
    width: "90%",
    height: 90,
    position: "absolute",
    left: "50%",
  },
  mag2: {
    width: "77%",
    height: 200,

    transform: [{ rotate: "180deg" }],
  },
});

export default Background;
