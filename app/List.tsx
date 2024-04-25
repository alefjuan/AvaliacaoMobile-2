import { View, Text, TextInput, StyleSheet, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FullScreen from "../src/components/FullScreen";
import data from "../src/components/services/data";
import { FontAwesome } from "@expo/vector-icons";
import HeaderApp from "../src/components/header/header";

export default function List() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter(item =>
    Object.values(item).some(
      value =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.id}</Text>
      <Text>{item.brand}</Text>
      <Text>{item.model}</Text>
      <Text>{item.year}</Text>
    </View>
  );

  return (
    <FullScreen>
      <HeaderApp onPressMenu={undefined}></HeaderApp>
      <View style={[styles.container, { top: 90 }]}>
        <FontAwesome name="search" size={30} color="dimgrey" />
        <TextInput
          style={styles.input}
          placeholder="Procure por uma marca"
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <View style={[styles.borderList, { top: 80 }]}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
    </FullScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 2,
    width: "90%",
    marginVertical: 10,
    padding: 8,
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
    borderColor: "black",
    alignSelf: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    //top:10,       
    marginVertical: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    position: "relative",
    marginHorizontal:10,
   },
   borderList:
   {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
   }
});
