import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// import { Button } from "../app-example/components/button";

export default function Inscrever() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A74CD",
      }}
    >
      <p>Nome completo</p>
      <TextInput style={styles.input} placeholder="Nome completo" />
      <p>Apelido</p>
      <TextInput style={styles.input} placeholder="Apelido" />
      <p>Email</p>
      <TextInput style={styles.input} placeholder="E-mail" />
      <p>Celular</p>
      <TextInput style={styles.input} placeholder="Celular" />
      <p>Senha</p>
      <TextInput style={styles.input} placeholder="Senha" />
      {/* <Button title="Enviar" onPress={handleMessage} /> */}
      <div style={{ display: "flex", gap: "5px" }}>
        {/* <Button title="Entrar" onPress={handleMessage} />
        <Button title="Inscrever-se" onPress={handleMessage} /> */}
      </div>
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
