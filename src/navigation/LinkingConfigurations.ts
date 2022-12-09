import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../interfaces/IStackNavigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Drawer: {
        screens: {
          Pokedex: {
            screens: {
              Pokedex: "Pokedex",
            },
          },
        },
      },
    },
  },
};

export default linking;