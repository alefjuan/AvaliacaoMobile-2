import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import {  router } from "expo-router";


const HeaderApp = () => {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleOpen = () => {
    const options = ["Sobre", "Logout", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;
    const handleLogout = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: "index" as never }],
      });
    };

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            router.push("about");
            break;
          case 1:
            handleLogout();
          
        }
      }
    );
  };

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
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity onPress={handleOpen}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderApp;
