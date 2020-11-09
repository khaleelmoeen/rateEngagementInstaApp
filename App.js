import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { useState } from "react";
<Image source={require("./images/araboost_logo.png")} />;
import { Button, StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Background from "./screens/Background";
import NavBar from "./screens/NavBar";
import MainScreen from "./screens/MainScreen";

import Result from "./screens/Result";

function ResultScreen() {
  return (
    <View>
      <Background />
      {/* <NavBar /> */}
      <Result />
    </View>
  );
}
function NavLogo() {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          color: "#fff",
          paddingTop: 40,
        }}
      >
        الرئيسية
      </Text>
      <Image
        style={{ width: 34, height: 34, left: "316%", top: -28 }}
        source={require("./images/araboost_logo.png")}
      />
      <Image
        style={{ width: 28, height: 29, right: "275%", top: -55 }}
        source={require("./images/menu.png")}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
function NavLogoRusult() {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          color: "#fff",
          paddingTop: 28,
        }}
      >
        النتائج
      </Text>
      <Image
        style={{ width: 34, height: 34, left: "385%", top: -31 }}
        source={require("./images/araboost_logo.png")}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            title: "الرئيسية",
            headerStyle: {
              backgroundColor: "#3F4257",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: (props) => <NavLogo {...props} />,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: "الرئيسية",
            headerStyle: {
              backgroundColor: "#3F4257",
            },
            headerTintColor: "#fff",

            headerTitle: (props) => <NavLogoRusult {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
