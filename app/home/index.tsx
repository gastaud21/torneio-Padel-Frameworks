import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "../app-example/components/button";

export default function Home() {
  function handleMessage() {
    const name = "Rodrigo";
    console.log("testando");
    Alert.alert(`olá ${name}`);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A74CD",
      }}
    >
      <Text style={styles.title}>Ranking Anual</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
