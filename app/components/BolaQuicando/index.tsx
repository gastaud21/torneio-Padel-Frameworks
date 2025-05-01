import { Image, View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function BolaQuicando() {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -50, //sobe
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, //desce
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.bolaImage, { transform: [{ translateY }] }]}
        source={require("../../../assets/images/bola-padel.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bolaImage: {
    width: 24,
    height: 23,
  },
});
