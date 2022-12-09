import React, { useContext } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Divider, Avatar, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomSidebarMenu = (props: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: "10%", flexDirection: "row" }}>
          <Avatar.Text
            label={"P"}
            style={styles.sideMenuProfileIcon}
            size={80}
          />
          <Text numberOfLines={1} style={styles.Text}>
            Prandi
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={({ focused }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              size={24}
              color={focused ? "#0d6efd" : "gray"}
            />
          )}
          inactiveTintColor="black"
          label="Cerrar sesión"
          onPress={() => console.log("Salir")}
        />
        <Divider style={{ borderColor: "red", shadowColor: "black" }} />
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        Version 1.0.0
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    margin: 20,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 2,
  },
  sideMenuProfileImage: {
    margin: 20,
    backgroundColor: "red",
  },
  Text: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
