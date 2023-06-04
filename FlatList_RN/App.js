import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
  areaPessoa: {
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
  },
});

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data._id}</Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data.nome}</Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data.idade}</Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data.email}</Text>
    </View>
  );
}
