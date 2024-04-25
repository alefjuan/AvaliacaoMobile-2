
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ActionSheet = () => {
  const handleOptionPress = (option) => {
    console.log(`Opção selecionada: ${option}`);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handleOptionPress("Configurações")}>
        <Text>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress("Perfil")}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress("Sair")}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionSheet;
