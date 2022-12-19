import { Route, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IDominantColor } from '../../interfaces/IColorDetection';
import { IPokemon } from '../../interfaces/IPokemon';

const InfoPokemon = (props: Route) => {
  const color: IDominantColor = props.route.params?.colores;
  const Pokemon: IPokemon = props.route.params?.poke;
  console.log("color info: ",color?.colors?.dominant?.hex); 
  console.log("Poke info: ",Pokemon?.name);
  return (
    <View>
      <Text>infoPokemon</Text>
    </View>
  )
}

export default InfoPokemon

const styles = StyleSheet.create({})