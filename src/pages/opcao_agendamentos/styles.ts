import { Dimensions, StyleSheet } from "react-native";
import {themes} from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:`center`, 
        justifyContent:`center`,
    },

    boxTop:{
        height: Dimensions.get('window').height/1,
        width: `100%`,
        backgroundColor: themes.colors.bgscreen,
        alignItems:`center`, 
        justifyContent:`center`
    },

    boxBotton1:{
        height: Dimensions.get('window').height/2,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxButtonMessages:{
        height: Dimensions.get('window').height/13,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    boxBotton3:{
        height: Dimensions.get('window').height/2,
        width: `100%`,
        alignItems: `center`,
        backgroundColor: themes.colors.bgscreen,
        justifyContent: `center`
    },

    logo:{
        width: 60,
        height: 60,
        top: 27,
    },


    button1: {
        width: 237,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row",
        top: -52,
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        paddingHorizontal: 10,
        gap: 10,
        
    },

    buttonMessages: {
        width: 324,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        top: -300,
        
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 1,
    },

    buttonVoltar: {
        width: 45,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        right: 140,
        top: -280,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
     
    },

    Voltar: { 
        width: 25, 
        height: 38, 
        borderRadius: 30,
        
    },

    buttonCancelar: {
        width: 260,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -118,
        left: 13,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 1,
    },


    textMsgAgendamentos:{
        fontSize: 14,
        width: 320,
        height: 50,
        left: 5,
        top: 12,
        fontWeight: 400,
        justifyContent: `center`,
        alignItems: `center`,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    textAgendamentos:{
        fontSize: 18,
        width: 179,
        top: 32,
        height: 30,
        left: 10,
        fontWeight: 400,
        justifyContent: `center`,
        alignItems: `center`,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    linhaCima:{
        width: 330,
        height: 100,
        top: 10,
    },

    linhaBaixo:{
        width: 334,
        height: 100,
        left: 73,
        justifyContent: `center`,
        alignItems: `center`,
        top: -60,
    },

    textCancelarAgendamento:{
        fontSize: 14,
        width: 190,
        height: 25,
        justifyContent: `center`,
        alignItems: `center`,
        right: 160, 
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    }
}); 