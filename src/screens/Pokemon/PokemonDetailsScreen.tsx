import { Route, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomAppBar from "../../components/CustomAppBar";
import { IPokemon } from "../../interfaces/IPokemon";


const PokemonDetailsScreen =(props: Route) => {
  const Pokemon: IPokemon = props.route.params?.item;
  const [color, setColor] = useState<string>("");

  const uri: string = Pokemon.sprites.other?.["official-artwork"].front_default as string;



  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomAppBar
        color={color}
        nombrePokemon={Pokemon.name}
        ImgPokemon={Pokemon.sprites.other?.["official-artwork"].front_default}
      />
      <View>
        <Text>Detallles</Text>
      </View>
    </SafeAreaView>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({});
