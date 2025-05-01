import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

type Props = TouchableOpacityProps & {
  title: string;
};

// ...rest pega todas as propriedades que não foram pegas
// colocar as propriedades no final pra fazer com que
// export function QuadraPadel({ title, ...rest }: Props) {

export default function QuadraPadel() {
  return (
    <ImageBackground
      // source={require("@/assets/images/quadra-padel.png")}
      source={require("../../../assets/images/quadra-padel.png")}
      style={{ width: 186, height: 327 }}
    >
      <Text>teste</Text>
    </ImageBackground>
    // <Image
    // source={{uri: "https://cdn.ahnegao.com.br/wp-content/uploads/2011/04/dinossauros.jpg"}}
    // style={{ width: 450, height: 677 }}
    // />
  );
}
