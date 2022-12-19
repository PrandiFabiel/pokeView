import { ImageSourcePropType } from "react-native";

export interface IAppBar {
    nombrePokemon: string;
    ImgPokemon?: string;
    idPokemon?: string;
    types?: string[];
    color?: string; 
    color2?: string;
    color3?: string;
    onPress?: () => void; 
}