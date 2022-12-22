import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Appbar, Card } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IAppBar } from "../interfaces/IAppBar";
import CustomStatusBar from "./CustomStatusBar";
import { theme } from "../constants/theme";
import { GlobalStyles } from "../constants/styles";
import { Utils } from "../utils/utilities";

const CustomAppBar = (Pokemon: IAppBar) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={[styles.AppBarHeader, { backgroundColor: Pokemon.color }]}
    >
      <CustomStatusBar />
      <Card.Content style={styles.card}>
        <Image source={{ uri: Pokemon.ImgPokemon }} style={styles.image} />
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={[styles.view, { marginTop: 10, marginLeft: 5 }]}>
            <Text style={[{ flex: 1 }, styles.text]}>
              {Utils.capitalize(Pokemon.nombrePokemon)}
            </Text>
            <Text style={styles.text}>#{Utils.addZeros(Pokemon.idPokemon!)}</Text>
          </View>
          <View
            style={[
              styles.view,
              { marginTop: 10, marginLeft: 5, width: "100%" },
            ]}
          >
            {Pokemon.types?.map((e, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  GlobalStyles.typePokemon,
                  { width: Utils.checkWidth(Pokemon.types?.length!) },
                ]}
              >
                <Text style={{color: "black", fontSize: 17}}>{Utils.capitalize(e.type.name)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Card.Content>
    </Appbar.Header>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  AppBarHeader: {
    marginTop: 30,
    marginBottom: 25,
    margin: 10,
  },
  view: {
    flexDirection: "row",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "white"
  },
  image: {
    width: 110,
    height: 110,
  },
  text: {
    color: theme.textColorBlack,
    fontSize: 18,
  },
});
