import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FullScreen from "./src/components/FullScreen";
import data from "./src/components/services/data";
import { FontAwesome } from "@expo/vector-icons";

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
      <Text>{item.brand}</Text>
    </View>
  );

  return (
    <FullScreen>
      <View style={styles.container}>
        <FontAwesome name="search" size={20} color="dimgrey" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    marginVertical: 8,
    padding: 8,
    borderRadius: 16,
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  itemContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
});