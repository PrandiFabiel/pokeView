import { Route, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IPokemon } from '../../interfaces/IPokemon';

const InfoPokemon = (props: Route) => {
  const Pokemon: IPokemon = props.route.params?.poke;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Pokemon.color}}>
    <View style={{justifyContent: "center", alignItems: "center"}}>
      <Text>infoPokemon</Text>
    </View>
    </SafeAreaView>
  )
}

export default InfoPokemon

const styles = StyleSheet.create({})