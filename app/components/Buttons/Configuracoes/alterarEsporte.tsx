import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

type Props = {
  imagem: ImageSourcePropType;
  esporte: string;
};

export default function AlterarEsporte({ imagem, esporte }: Props) {
  return (
    <View>
      <Text style={button.texto}>{esporte}</Text>
      <ImageBackground source={imagem} style={button.imagem}></ImageBackground>
    </View>
  );
}

const button = StyleSheet.create({
  main: {},
  texto: {
    fontSize: 16,
  },
  imagem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // width: 109,
    // height: 62,
    width: 69,
    height: 39,
    // transform: [{ scale: 0.5 }, { rotate: "270deg" }],
  },
});
