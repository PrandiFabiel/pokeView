import { ImageSourcePropType } from "react-native";
import { Type } from "./IPokemon";

export interface IAppBar {
    nombrePokemon: string;
    ImgPokemon?: string;
    idPokemon?: number;
    types?: Type[];
    color?: string; 
    color2?: string;
    color3?: string;
    onPress?: () => void; 
}