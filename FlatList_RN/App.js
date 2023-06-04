import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Pessoa from "./src/components/Pessoa";

export default function App() {
  const [feed, setFeed] = useState([
    { _id: "1", nome: "Julio", idade: 30, email: "julio@gmail.com" },
    { _id: "2", nome: "Kevene", idade: 22, email: "kevene@gmail.com" },
    { _id: "3", nome: "Kayla", idade: 3, email: "kayla@gmail.com" },
    { _id: "4", nome: "Enzo", idade: 7, email: "enzo@gmail.com" },
    { _id: "5", nome: "Jose", idade: 40, email: "jose@gmail.com" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
