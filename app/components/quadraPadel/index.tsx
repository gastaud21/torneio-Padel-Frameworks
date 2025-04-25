import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ImageBackground,
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

export function QuadraPadel() {
  return (
    <ImageBackground
      source={require("@/assets/images/quadra-padel.png")}
      style={{ width: 186, height: 327 }}
    ></ImageBackground>
  );
}
