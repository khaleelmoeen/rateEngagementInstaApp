import React from "react";
import { StyleSheet, StatusBar, Image, View, Text } from "react-native";

function NavBar(props) {
  return (
    <View style={styles.nav}>
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "#3F4257",
        }}
      >
        <Image
          style={styles.logo}
          source={require("../images/araboost_logo.png")}
        />
        <Text style={styles.logo_text_top}>عربوست</Text>
        <Text style={styles.logo_text_down}>من الناس الى الناس</Text>
      </View>

      <Image style={styles.menu_logo} source={require("../images/menu.png")} />

      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  nav: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    width: 40,
    height: 40,
  },

  menu_logo: {
    position: "absolute",
    top: 54,
    left: 15,
    width: 27,
    height: 27,
  },
});

export default NavBar;
