import { Route, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const PokemonDetailsScreen = (props: Route) => {
  const Pokemon = props.route.params?.item;
  useEffect(()=> {
    console.log("Este es el parametro: ", Pokemon); 
  },[])
  return (
    <View>
      <Text>PokemonDetailsScreen</Text>
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({});
