import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";

class Slider extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 20, y: 200 },
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={this.position.getLayout()}>
          <View style={styles.slider} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    width: 200,
    height: 10,
    borderRadius: 20,
    backgroundColor: "red",
  },
});
export default Slider;
