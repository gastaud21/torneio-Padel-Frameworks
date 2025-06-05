import { View, Text, StyleSheet } from "react-native";

export default function Jogos() {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.clubeDiv}>
        <Text style={styles.padel}>Pádel</Text>
        <Text style={styles.sul}>Sul</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 45,
    backgroundColor: "#08316A",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  clubeDiv: {
    display: "flex",
    flexDirection: "row",
  },
  padel: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  sul: {
    color: "#ffd801",
    fontSize: 24,
    fontWeight: "bold",
  },
});
