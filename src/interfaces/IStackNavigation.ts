import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerParamList = {
  Pokedex: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
