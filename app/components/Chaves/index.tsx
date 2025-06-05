import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { List } from "react-native-paper";
import Avatar from "@/app/components/Avatar";

export default function Chaves() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A</Text>
      <Image source={require("../../../assets/images/RedeDivider.svg")} />
      <View style={styles.divDupla}>
        <View>
          <Avatar
            rounded
            size={48}
            // containerStyle={styles.playerAvatar}
            source={{
              uri: "https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO-1.png",
            }}
          />
          <Text style={styles.playerName}>Fredes</Text>
        </View>
        <Text style={styles.pontos}>5</Text>
        <View>
          <Avatar
            rounded
            size={48}
            // containerStyle={styles.playerAvatar}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz63rvLcLushA9lu5ur1gISTIRtgDkQEdmOA&s",
            }}
          />
          <Text style={styles.playerName}>Gastaud</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.divDupla}>
        <View>
          <Avatar
            rounded
            size={48}
            // containerStyle={styles.playerAvatar}
            source={{
              uri: "https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO-1.png",
            }}
          />
          <Text style={styles.playerName}>Fredes</Text>
        </View>
        <Text style={styles.pontos}>5</Text>
        <View>
          <Avatar
            rounded
            size={48}
            // containerStyle={styles.playerAvatar}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz63rvLcLushA9lu5ur1gISTIRtgDkQEdmOA&s",
            }}
          />
          <Text style={styles.playerName}>Gastaud</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "#2A74CD",
  },
  divDupla: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  playerName: {
    backgroundColor: "#9BFB3C",
  },
  pontos: {
    color: "white",
    fontSize: 24,
  },
  divider: {
    width: "100%",
    height: 5,
    backgroundColor: "white",
    marginVertical: 20,
  },
  title: {
    color: "white",
  },
});
