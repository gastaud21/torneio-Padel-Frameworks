import { View, StyleSheet, Animated, Image } from "react-native";
import { useEffect, useRef } from "react";

export default function BolaQuicando() {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -50, // sobe
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, // desce
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  // Interpolação da sombra com base na altura da bola
  const shadowScale = translateY.interpolate({
    inputRange: [-50, 0],
    outputRange: [0.5, 1], // menor quando a bola sobe, maior quando ela desce
  });

  const shadowOpacity = translateY.interpolate({
    inputRange: [-50, 0],
    outputRange: [0.3, 0.8], // sombra mais fraca no alto, mais forte embaixo
  });

  return (
    <View style={styles.container}>
      {/* Sombra */}
      <Animated.View
        style={[
          styles.shadow,
          {
            opacity: shadowOpacity,
            transform: [{ scaleX: shadowScale }],
          },
        ]}
      />
      {/* Bola */}
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
    marginBottom: 20,
  },
  shadow: {
    width: 30,
    height: 8,
    backgroundColor: "#000",
    borderRadius: 4,
    position: "absolute",
    bottom: "45%",
    zIndex: -1,
  },
});
