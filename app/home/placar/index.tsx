import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";
// import { Quadra }


export default function Placar() {
  return (
    <View>
      <ImageBackground
        // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        source={require("../../../assets/images/quadra-padel.png")}
        // source={{uri: "https://cdn.ahnegao.com.br/wp-content/uploads/2011/04/dinossauros.jpg"}}
        // style={{ width: 450, height: 677 }}
        style={{ width: 186, height: 327 }}
        resizeMode="cover"
      />
      {/* <QuadraPadel /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 32,
  },
  quadra: {
    backgroundImage: "/assets/images/quadra-padel.png",
  },
});
