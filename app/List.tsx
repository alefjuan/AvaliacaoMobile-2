import { View, Text, StyleSheet, SectionList } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FullScreen from "../src/components/FullScreen";
import data from "../src/components/services/data";
import HeaderApp from "../src/components/header/HeaderApp";
import { Stack } from "expo-router";

export default function List() {
  const router = useRouter();
  const [searchTerm] = useState("");
  const filteredData = data.filter(item =>
    Object.values(item).some(
      value =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Aqui vou agrupar por marca
  const groupedData = filteredData.reduce((acc, curr) => {
    const brand = curr.brand.toUpperCase();
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(curr);
    return acc;
  }, {});

  const sections = Object.keys(groupedData).map(brand => ({
    title: brand,
    data: groupedData[brand],
  }));

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.id}</Text>
      <Text>{item.model}</Text>
      <Text>{item.year}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <FullScreen>
      <Stack.Screen options={
        {
          headerRight :()=><Text><HeaderApp/></Text>,
          title:"Lista de Veículos"
          }
        }>
      </Stack.Screen>
      {/* <HeaderApp></HeaderApp> */}
      
      {/* AQUI JAZ UMA TENTATIVA QUE DÁ CERTO MAS TO COM POUCO TEMPO PRA MEXER COM CSS
      <View style={[styles.container, { top: 50, zIndex:1 }]}>
        <FontAwesome name="search" size={30} color="dimgrey" />
        <TextInput
          style={styles.input}
          placeholder="Procure por uma marca"
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View> */}
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
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
    marginVertical: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    position: "relative",
    marginHorizontal:10,
  },
  sectionHeader: {
    margin:10,
    backgroundColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign:"center",
    alignContent: "center",
    alignItems: "center",
  },
  sectionHeaderText: {
    fontWeight: "bold",
  },
});
