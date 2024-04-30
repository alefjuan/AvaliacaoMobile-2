import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import FullScreen from "../src/components/FullScreen";
import { Stack } from "expo-router";
import HeaderAbout from "../src/components/header/HeaderAbout";

export default function SimpleScreen() {
  return (
    <FullScreen>
      <Stack.Screen options={
        {
          headerRight :()=><Text><HeaderAbout/></Text>,
          title:"Sobre"
          }
        }>
      </Stack.Screen>
    <View style={styles.container}>
      <Text style={styles.title1}>UTFPR Cars</Text>
      <Text style={styles.title2}>Versão 1.0</Text>
      <Text style={styles.title3}>Aplicação desenvolvida por <Text style={{fontWeight:"bold"}}>Alef Juan Ferreira</Text> na disciplina de Aplicações Mobile!</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/alefjuan")}>
        <Text style={styles.link}>https://github.com/alefjuan</Text>
      </TouchableOpacity>
    </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20
  },
  title1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 22
  },
  title3: {
    fontSize: 22
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: 20,
  },
});

