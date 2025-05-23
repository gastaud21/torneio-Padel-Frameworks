import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ImageBackground,
  Image,
  View,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import BolaQuicando from "../BolaQuicando";
import Avatar from "@/app/components/Avatar";

type Props = TouchableOpacityProps & {
  title?: string;
  esporte: string;
  patrocinadorLogo?: string;
};

// ...rest pega todas as propriedades que não foram pegas
// colocar as propriedades no final pra fazer com que
// export function QuadraPadel({ title, ...rest }: Props) {

export default function QuadraPadel({ title, esporte }: Props) {
  // const caminhoImgQuadra = esporte == "Padel";

  // const [imagemQuadra, setImagemQuadra] = useState<ImageSourcePropType>();

  // useEffect(() => {
  //   console.log("o esporte mudou");

  //   if (esporte === "Padel") {
  //     setImagemQuadra(require("../../../assets/images/quadra-padel.png"));
  //   } else {
  //     setImagemQuadra(require("../../../assets/images/quadra-beach.png"));
  //   }
  // }, [esporte]); // sempre que o esporte mudar, muda a imagem

  function getImagemQuadra(esporte: string): ImageSourcePropType {
    console.log("ESPORTE: ", esporte);

    return esporte === "Padel"
      ? require("../../../assets/images/quadra-padel.png")
      : require("../../../assets/images/quadra-beach.png");
  }

  return (
    <View>
      <ImageBackground source={getImagemQuadra(esporte)} style={styles.quadra}>
        <View style={styles.divDupla}>
          <View style={styles.divPlayer}>
            <Avatar
              rounded
              size={48}
              // containerStyle={styles.playerAvatar}
              source={{
                uri: "https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO-1.png",
              }}
            />
          </View>
          <View style={styles.divPlayer}>
            <Avatar
              rounded
              size={48}
              // containerStyle={styles.playerAvatar}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz63rvLcLushA9lu5ur1gISTIRtgDkQEdmOA&s",
              }}
            />
          </View>
        </View>
        <View style={styles.divBola}>
          {/* <Image
          style={styles.bolaImage}
          source={require("../../../assets/images/bola-padel.png")}
        /> */}
          <BolaQuicando />
        </View>
        <View style={styles.divDupla}>
          <View style={styles.divPlayer}>
            <Avatar
              rounded
              size={48}
              source={{
                uri: "https://www.padelfip.com/wp-content/uploads/2023/02/Stupaczuk-2.png",
              }}
            />
          </View>
          <View style={styles.divPlayer}>
            <Avatar
              rounded
              size={48}
              source={{
                uri: "https://www.padelfip.com/wp-content/uploads/2023/02/08-CHINGOTTO-1.png",
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  quadra: {
    display: "flex",
    justifyContent: "space-between",
    width: 186,
    height: 327,
  },
  divDupla: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 16,
  },
  divPlayer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  playerAvatar: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
  },
  divBola: {
    display: "flex",
    height: 100,
  },
  bolaImage: {
    width: 24,
    height: 23,
  },
});

const placar = StyleSheet.create({
  dupla: {},
  divPlacar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  containerGames: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  fontPlacar: {
    textAlign: "center",
    fontFamily: "PostNoBillsColomboExtraBold",
    fontWeight: "normal",
    fontSize: 38,
    color: "white",
  },
  divGames: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  divTextGames: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F49F1C",
    borderRadius: "50%",
    width: 25,
    height: 25,
  },
  textGame: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  divBotoes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
