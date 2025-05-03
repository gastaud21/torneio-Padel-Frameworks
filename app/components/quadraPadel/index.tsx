import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ImageBackground,
  Image,
  View,
  StyleSheet,
} from "react-native";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Avatar } from "@rneui/themed";
import BolaQuicando from "../BolaQuicando";
import { Typography } from "@/assets/fonts/typography";
import { Button } from "@rneui/base";

type Props = TouchableOpacityProps & {
  title: string;
};

// ...rest pega todas as propriedades que não foram pegas
// colocar as propriedades no final pra fazer com que
// export function QuadraPadel({ title, ...rest }: Props) {

export default function QuadraPadel() {
  return (
    <View style={{ backgroundColor: "#2c2c2c" }}>
      <View>
        <Text>Imagem logotipo do clube</Text>
      </View>
      <View style={styles.main}>
        <ImageBackground
          source={require("../../../assets/images/quadra-padel.png")}
          style={styles.quadra}
        >
          <View style={styles.divDupla}>
            <View style={styles.divPlayer}>
              <Avatar
                rounded
                size={48}
                containerStyle={styles.playerAvatar}
                source={{
                  uri: "https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO-1.png",
                }}
              />
            </View>
            <View style={styles.divPlayer}>
              <Avatar
                rounded
                size={48}
                containerStyle={styles.playerAvatar}
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
                containerStyle={styles.playerAvatar}
                source={{
                  uri: "https://www.padelfip.com/wp-content/uploads/2023/02/Stupaczuk-2.png",
                }}
              />
            </View>
            <View style={styles.divPlayer}>
              <Avatar
                rounded
                size={48}
                containerStyle={styles.playerAvatar}
                source={{
                  uri: "https://www.padelfip.com/wp-content/uploads/2023/02/08-CHINGOTTO-1.png",
                }}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={placar.divPlacar}>
          <View style={placar.dupla}>
            <View style={placar.divBotoes}>
              <Button>-</Button>
              <Button>+</Button>
            </View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>15</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>3</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>2</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={placar.containerGames}>
              <Text style={[placar.fontPlacar]}>30</Text>
              <View style={placar.divGames}>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>6</Text>
                </View>
                <View style={placar.divTextGames}>
                  <Text style={placar.textGame}>5</Text>
                </View>
              </View>
            </View>
            <View style={placar.divBotoes}>
              <Button>-</Button>
              <Button>+</Button>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>Outdoor patrocinador</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 10,
  },
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
