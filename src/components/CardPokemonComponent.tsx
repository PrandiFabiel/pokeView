import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPokemon } from "../interfaces/IPokemon";

import Image from "react-native-image-progress";
import { Card } from "react-native-paper";

const CardPokemonComponent = (Pokemon: IPokemon) => {
  return (
    <View>
      <Card.Content style={Styles.CardContend}>
        <Image
          style={Styles.image}
          source={{
            uri: Pokemon.sprites.other?.["official-artwork"].front_default,
          }}
        ></Image>
      </Card.Content>
      <View style={Styles.detalle}>
        <Text>{Pokemon.id}</Text>
        <Text>{Pokemon.order}</Text>
        <Text>{Pokemon.name}</Text>
      </View>
    </View>
  );
};

export default CardPokemonComponent;

const Styles = StyleSheet.create({
  CardContend: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
  },
  titleProducto: {
    fontSize: 13,
    fontWeight: "600",
  },
  viewButtonCard: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
  },
  marca: {
    color: "#d3d3d3",
    fontSize: 9,
    fontWeight: "bold",
  },
  detalle: {
    marginLeft: 10,
    width: "90%",
  },
});
