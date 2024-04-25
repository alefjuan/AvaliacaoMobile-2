import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HeaderApp = ({ onPressMenu }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        height: 50,
        alignItems: "center",
        //backgroundColor: "gray",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
        Avaliação Alef
      </Text>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={onPressMenu}>
          <FontAwesome name="bars" size={24} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderApp;
