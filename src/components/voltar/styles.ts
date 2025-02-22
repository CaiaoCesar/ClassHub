import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    buttonVoltar: {
        width: 45,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        right: 140,
        top: -160,
        gap: 10,    
    },

    Voltar: { 
        width: 25, 
        height: 38, 
    },
})