import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

import { Button } from "@rneui/base";

type Props = {
  imagem: ImageSourcePropType;
  esporte: string;
};

export default function AlterarEsporte({ imagem, esporte }: Props) {
  return (
    <View>
      <Button buttonStyle={button.button}>
        <Text style={button.texto}>{esporte}</Text>
        <ImageBackground
          source={imagem}
          style={button.imagem}
        ></ImageBackground>
      </Button>
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
