import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import linking from "./LinkingConfigurations";
import {
  RootStackParamList,
  RootDrawerParamList,
} from "../interfaces/IStackNavigation";
import CustomSidebarMenu from "../components/CustomDrawerMenu";
import Items from "../constants/DrawerMenuItem";
import HeaderDrawerItems from "../components/DrawerHeader";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Pokedex"
      screenOptions={{
        drawerStatusBarAnimation: "fade",
        drawerActiveTintColor: "#e91e63",
        drawerStyle: { marginVertical: 0 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      {Items.map((drawer: any) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            title: drawer.titulo,
            drawerIcon: ({ focused }) =>
              drawer.iconType === "Material" ? (
                <Icon
                  size={24}
                  name={drawer.icon}
                  color={focused ? "#0d6efd" : "gray"}
                />
              ) : (
                <FontAwesome5
                  name={drawer.icon}
                  size={24}
                  color={focused ? "#0d6efd" : "gray"}
                />
              ),
            headerShown: true,
            header: () => {
              return (
                <HeaderDrawerItems titulo={drawer.titulo}></HeaderDrawerItems>
              );
            },
            drawerInactiveTintColor: "black",
          }}
          component={drawer.name === "Pokedex" ? HomeScreen : HomeScreen}
        />
      ))}
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
