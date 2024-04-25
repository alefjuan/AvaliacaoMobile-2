import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Link, router } from "expo-router";
import FullScreen from "../src/components/FullScreen";
import FormInput from "../src/components/Form/FormInput";
import Card from "../src/components/Card";
import FormButton from "../src/components/Form/FormButton";
import HeaderApp from "../src/components/header/header";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "teste123" && password === "teste123") {
      router.push("List")
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <FullScreen>
      <Image source={require("../assets/car2.jpg")} />
      <Card>
        <FormInput label="Username" value={username} onChangeText={setUsername} />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <FormButton onPress={handleLogin} title="Entrar" />
      </Card>
    </FullScreen>
  );
}
