import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import FullScreen from "../src/components/FullScreen";
import FormInput from "../src/components/Form/FormInput";
import Card from "../src/components/Card";
import { Stack } from "expo-router";
import FormButton from "../src/components/Form/FormButton";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "teste" && password === "123") {
      router.push("List")
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <FullScreen>
      <Stack.Screen options={
        {
          title:"UTFPR Cars"
          }
        }>
      </Stack.Screen>
      <Image source={require("../assets/horse.png")} />
      <Card>
        <FormInput label="Username" value={username} onChangeText={setUsername} />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Image source={require("../assets/carros.png")} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Card>
    </FullScreen>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  button: {
    top:30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonImage: {
    width: 250,
    height: 90,
    resizeMode: "stretch",
    position: "absolute",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    zIndex: 1,
  },
});