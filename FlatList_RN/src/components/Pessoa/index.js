import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data._id}</Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data.nome}</Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>
        {props.data.idade} anos
      </Text>
      <Text style={{ color: "#fff", marginLeft: 30 }}>{props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: "#123212",
    height: 200,
    marginBottom: 15,
  },
});
