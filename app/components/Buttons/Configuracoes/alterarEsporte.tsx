import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

// import { Button } from "@rneui/base";
import { Button } from "react-native";

type Props = {
  imagem: ImageSourcePropType;
  esporte: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function AlterarEsporte({ imagem, esporte, onPress }: Props) {
  return (
    <View>
      <TouchableOpacity style={button.button} onPress={onPress}>
        <Text style={button.texto}>{esporte}</Text>
        <ImageBackground
          source={imagem}
          style={button.imagem}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const button = StyleSheet.create({
  main: {},
  texto: {
    fontSize: 16,
    color: "white",
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
  button: {
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
  },
});
