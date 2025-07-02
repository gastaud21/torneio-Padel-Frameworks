import { View, StyleSheet, Animated, Image } from "react-native";
import { useEffect, useRef } from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type Props = TouchableOpacityProps & {
  title?: string;
  esporte: string;
  patrocinadorLogo?: string;
};

export default function BolaQuicando({ esporte }: Props) {
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
  }, []);

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
      {/* ⚠️ Ordem importa: a sombra vem primeiro */}
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
      {esporte == "Padel" ? (
        <Animated.Image
          source={require("../../../assets/images/bola-padel.png")}
          style={[styles.bolaImage, { transform: [{ translateY }] }]}
        />
      ) : (
        <Animated.Image
          source={require("../../../assets/images/bola-beach.png")}
          style={[styles.bolaImage, { transform: [{ translateY }] }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible", // 🔧 garante que a sombra não seja cortada
  },
  bolaImage: {
    width: 24,
    height: 23,
  },
  shadow: {
    position: "absolute",
    top: "55%", // 🔧 evita usar bottom percentual (mais confiável no iOS)
    width: 30,
    height: 8,
    backgroundColor: "#000",
    borderRadius: 4,
  },
});
