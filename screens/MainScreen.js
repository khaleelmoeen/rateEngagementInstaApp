import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  ProgressViewIOS,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavBar from "./NavBar";
import Background from "./Background";
import { Component } from "react";

class MainScreen extends Component {
  state = {
    username: "",
  };

  handelUserName = (text) => {
    this.setState({ username: text });
  };
  handel = () => {
    console.log(this.state.username);
  };

  render() {
    const { navigation } = this.props;
    const Progress = ({ done }) => {
      const [style, setStyle] = React.useState({});
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${done}%`,
        };

        setStyle(newStyle);
      }, 200);
    };
    return (
      <View style={styles.container}>
        <View>
          <Background />
        </View>
        <Text numberOfLines={3} style={styles.text}>
          ادخل وشوف مدى نشاط حسابك عبر الانستجرام , عشان تقدر تسجل معنا وتكون
          احد الاعضاء في منصة عربوست وتكسب المال
        </Text>
        <View
          style={{
            flex: 2,
            top: "20%",
            alignItems: "center",
          }}
        >
          <TextInput
            onChangeText={this.handelUserName}
            placeholderTextColor="#ddd"
            autoCapitalize="none"
            autoCompleteType={"username"}
            placeholder={"حساب الانستجرام"}
            style={{
              position: "absolute",
              height: 40,
              width: "80%",
              borderColor: "red",
              borderRadius: 80,
              borderWidth: 1,
              textAlign: "center",
              alignSelf: "center",
            }}
          />
          <Image
            style={{
              width: 50,
              height: 50,
              alignSelf: "flex-start",
              left: 33,
              top: -4,
            }}
            source={require("../images/instaLogo.png")}
          />
        </View>
        <View
          style={{
            top: "-63%",

            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (this.state.username == "") {
                Alert.alert("بتستهبل؟");
              } else {
                navigation.push("Result");
                console.log(this.state.username);
              }
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={styles.instagramButton}
            >
              <Text style={styles.loginText}>قدر</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.follwersNumber}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#3F4257",
              fontWeight: "700",
              paddingVertical: 20,
            }}
          >
            عدد المتابعين
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            500-1000
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            5000_1000
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            50K_5000
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            100K_50K
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            1M_100K
          </Text>
          <Text
            style={{
              flex: 1,
              color: "#FF5E3A",
              fontWeight: "700",
              paddingVertical: 13,
            }}
          >
            > 1M
          </Text>
        </View>
        <View style={styles.slidersContainer}>
          <Text
            style={{
              flex: 2,
              textAlign: "center",
              color: "#3F4257",
              fontWeight: "700",
              fontSize: 15,
              paddingVertical: 20,
            }}
          >
            متوسط معدل التفاعل للمتابعين
          </Text>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <LinearGradient
              id="linerColor"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 80, height: 18 }}>
                <Text style={styles.textPresentige}>3%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 13 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 90, height: 18 }}>
                <Text style={styles.textPresentige}>3.5%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 13 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 100, height: 18 }}>
                <Text style={styles.textPresentige}>4%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 13 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 110, height: 18 }}>
                <Text style={styles.textPresentige}>4.5%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 13 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 130, height: 18 }}>
                <Text style={styles.textPresentige}>5.2%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 13 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 160, height: 18 }}>
                <Text style={styles.textPresentige}>6%</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

// function MainScreen({ navigation }) {
//
//   const handel = () => {
//     console.log("ckliced");
//   };
//   fetch(
//     "https://graph.facebook.com/v3.2/17841405822304914?fields=biography%2Cid%2Cusername%2Cwebsite&access_token=EAACwX...",
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstParam: { name },
//         secondParam: "yourOtherValue",
//       }),
//     }
//   );
//   console.log(name);

// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  instagramButton: {
    paddingVertical: 10,
    marginLeft: 80,
    marginRight: 80,

    borderRadius: 20,
    margin: 10,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  text: {
    position: "absolute",
    top: "7%",
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#3F4257",
  },
  titleContaner: {
    position: "absolute",
    top: 170,
    right: 10,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  follwersNumber: {
    position: "absolute",
    top: "42%",

    right: 29,
    alignItems: "center",
    flexDirection: "column",
  },
  slidersContainer: {
    position: "absolute",
    top: "42%",
    left: "0%",
    alignItems: "flex-end",
    right: 140,
  },
  textPresentige: {
    color: "white",
    justifyContent: "center",
    alignSelf: "flex-end",
    right: 20,
    fontSize: 12,
    fontWeight: "700",
  },
});
export default MainScreen;
