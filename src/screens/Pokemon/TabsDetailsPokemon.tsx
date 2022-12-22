import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Moves from "./Moves";
import InfoPokemon from "./InfoPokemon";
import { ITabBarProps } from "../../interfaces/ITabBarProps";
import MoreInfoAboutPokemon from "./MoreInfoAboutPokemon";
const Tab = createMaterialTopTabNavigator();

const TabsDetailsPokemon = ({ colorPokemon, Pokemon }: ITabBarProps) => {
  const [showLabel0, setShowLabel0] = useState<boolean>(false);
  const [showLabel1, setShowLabel1] = useState<boolean>(false);
  const [showLabel2, setShowLabel2] = useState<boolean>(false);
  return (
    <Tab.Navigator
      initialRouteName="Información"
      screenOptions={{
        swipeEnabled: true,
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
        lazy: true,
        tabBarStyle: { backgroundColor: colorPokemon?.colors?.dominant?.hex },
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderColor: colorPokemon?.colors?.other[1].hex,
        },
      }}
    >
      <Tab.Screen
        initialParams={{poke: Pokemon, colores: colorPokemon}}
        listeners={{
          tabPress: (e) => {
            setShowLabel0(true);
            setShowLabel1(false);
            setShowLabel2(false);
          },
        }}
        options={{
          tabBarShowLabel: showLabel0,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={24}
              name={"information-outline"}
              color={focused ? "black" : colorPokemon?.colors?.other[1].hex}
            />
          ),
        }}
        name="Información"
        component={InfoPokemon}
      />
      <Tab.Screen
        initialParams={Pokemon}
        listeners={{
          tabPress: (e) => {
            setShowLabel1(true);
            setShowLabel0(false);
            setShowLabel2(false);
          },
        }}
        options={{
          tabBarShowLabel: showLabel1,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={24}
              name={"sword-cross"}
              color={focused ? "black" : colorPokemon?.colors?.other[1].hex}
            />
          ),
        }}
        name="Movimientos"
        component={Moves}
      />
      <Tab.Screen
        initialParams={Pokemon}
        listeners={{
          tabPress: (e) => {
            setShowLabel2(true);
            setShowLabel1(false);
            setShowLabel0(false);
          },
        }}
        options={{
          tabBarShowLabel: showLabel2,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              size={24}
              name={"plus"}
              color={focused ? "black" : colorPokemon?.colors?.other[1].hex}
            />
          ),
        }}
        name="Más"
        component={MoreInfoAboutPokemon}
      />
    </Tab.Navigator>
  );
};

export default TabsDetailsPokemon;
