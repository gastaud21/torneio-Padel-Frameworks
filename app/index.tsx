import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
import { Button } from "@/app-example/components/button";
import { Link } from "expo-router";
import { Component, ReactNode, useState } from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);

  function handleLogin() {
    const name = "Rodrigo";
    const validEmail = "teste@email.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      router.push({ pathname: "/home", params: { email } });
    } else {
      setWrongInput(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Padel</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry //ofusca o texto, ideal para senhas
        onSubmitEditing={handleLogin} // Caso o usuário pressione Enter quando está digitando neste campo, chamamos a função para validar o login
      />
      {wrongInput && <Text>E-mail ou senha incorretos!</Text>}
      <View style={styles.buttonContainer}>
        {/* <Link href="/home" push asChild>
          <Text>Entrar</Text>
        </Link> */}
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Increver-se" />
      </View>
    </View>
  );
}

{
  /* <Button title="Inscrever-se" onPress={handleSignUp} /> */
}
{
  /* <Button title="Entrar" onPress={handleLogin} /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A74CD",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    marginBottom: 30,
  },
  label: {
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});
