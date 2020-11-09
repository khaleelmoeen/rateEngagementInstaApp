import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
function Result(props) {
  const name = "khaleelamsha";
  const follwers = "20k";
  const posts = "199";
  const follwing = "200";
  const username = "خليل";
  const value = 33;
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/posonallPic.jpg")}
        style={{
          width: 130,
          height: 130,
          borderRadius: 130 / 2,
          top: 40,
          borderWidth: 3,
          borderColor: "#F77737",
        }}
      />
      <View>
        <Text
          style={{
            top: 50,
            fontSize: 17,
            fontWeight: "700",
            color: "#3F4257",
          }}
        >
          {name}
        </Text>
      </View>
      <View>
        <View style={styles.numberDetalis}>
          <Text
            style={{
              paddingHorizontal: 60,
              fontWeight: "700",
              color: "#3F4257",
            }}
          >
            {follwers}
          </Text>
          <Text
            style={{
              paddingHorizontal: 60,
              fontWeight: "700",
              color: "#3F4257",
            }}
          >
            {posts}
          </Text>
          <Text
            style={{
              paddingHorizontal: 60,
              fontWeight: "700",
              color: "#3F4257",
            }}
          >
            {follwing}
          </Text>
        </View>
        <View style={styles.textDtalis}>
          <Text style={styles.textStyle2}>المتابعين</Text>
          <Text style={styles.textStyle2}>المنشورات</Text>
          <Text style={styles.textStyle2}>يتابع</Text>
        </View>
      </View>
      <View style={{ top: -40 }}>
        <View style={styles.textRsualt}>
          <Text style={styles.textStyle}>معدل التفاعل</Text>
          <Text style={styles.textStyle}>معدل التعليقات</Text>
          <Text style={styles.textStyle}>معدل الاعجابات</Text>
        </View>
        <View style={styles.resultSliderStyle}>
          <View style={{ paddingVertical: 15 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 118, height: 18 }}>
                <Text style={styles.textPresentige}>4%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
              style={{ borderRadius: 8 }}
            >
              <View style={{ width: 60, height: 18 }}>
                <Text style={styles.textPresentige}>2.5%</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ paddingVertical: 15 }}>
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
      <View style={{ top: 470, position: "absolute" }}>
        <Text
          style={{ fontWeight: "700", color: "#3F4257", alignItems: "center" }}
        >
          اهلا وسهلا{" "}
          <Text style={{ color: "#3F4257", fontWeight: "900" }}>
            {" "}
            {username}
          </Text>{" "}
          نعتذر منك حسابك غير نشط
        </Text>
        <Text
          style={{
            fontWeight: "300",
            color: "#3F4257",
            alignItems: "center",
            top: 14,
            left: 69,
          }}
        >
          شارك مع اصدقائك:
        </Text>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 70,
            right: -15,
          }}
        >
          <Image
            style={styles.loginLogos}
            source={require("../images/faceLogo.png")}
          />
          <Image
            style={styles.loginLogos}
            source={require("../images/instaLogo.png")}
          />
          <Image
            style={styles.loginLogos}
            source={require("../images/snapchatLogo.png")}
          />
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5851DB", "#C13584", "#E1306C", "#FD1D1D", "#F77737"]}
        style={{
          borderRadius: 20,
          position: "absolute",
          top: 600,
        }}
      >
        <TouchableOpacity style={styles.signUpButton}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  numberDetalis: {
    top: 90,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  textDtalis: {
    top: 100,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  textRsualt: {
    top: 160,
    left: 100,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  textStyle: {
    paddingVertical: 15,
    fontWeight: "400",
    color: "#3F4257",
    textAlign: "center",
  },
  textStyle2: {
    paddingHorizontal: 50,
    fontWeight: "700",
    color: "#3F4257",
    alignItems: "center",
  },
  textPresentige: {
    color: "white",
    justifyContent: "center",
    alignSelf: "flex-end",
    right: 20,
    fontSize: 10,
    top: 2,

    fontWeight: "700",
  },

  resultSliderStyle: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 18,
    right: 35,
    alignItems: "flex-end",
  },
  buttnsStyle: {},
  signUpButton: {
    margin: 1,
    width: 300,
    height: 40,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  loginLogos: {
    width: 40,
    height: 40,
    marginHorizontal: 30,
    alignSelf: "center",
  },
});

export default Result;
