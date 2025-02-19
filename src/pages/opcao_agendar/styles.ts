import { Button, Dimensions, StyleSheet } from "react-native";
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
        top: -97,
    },

    setaEsquerda:{
        width: 100,
        height: 100,
        right: 25,
        top: -20,
    },

    setaDireita:{
        width: 100,
        height: 100,
        right: 25,
        top: -20,
    },

    ButtonSetaEsquerda: {
        width: 50,
        borderRadius: 20,
        height: 50,
        top: -83,
        left: -138,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 5,
    },

    ButtonSetaDireita: {
        width: 50,
        borderRadius: 20,
        top: -134,
        height: 50,
        right: -138,
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 5,
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
        shadowColor: themes.colors.shadow,
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
        top: -160,
        gap: 10,    
    },

    Voltar: { 
        width: 25, 
        height: 38, 
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
        top: -170,
    },

    linhaBaixo:{
        width: 334,
        height: 100,
        left: 85,
        justifyContent: `center`,
        alignItems: `center`,
        top: -60,
    },
    
    buttonAgendar: {
        width: 200,
        height: 45, 
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: "row", 
        backgroundColor: themes.colors.secondary,
        borderRadius: 30,
        top: -118,
        left: 13,
        gap: 10,
        shadowColor: themes.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 1,
    },

    agendarText:{
        fontSize: 14,
        width: 190,
        height: 25,
        justifyContent: `center`,
        alignItems: `center`,
        right: 115, 
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    confirmaAgendamento:{
        fontSize: 17,
        width: 390,
        height: 59,
        left: 80,
        justifyContent: `center`,
        alignItems: `center`,
        fontWeight: 400,
        color: themes.colors.primary,
        fontFamily: themes.fonts.main
    },

    confirma:{
        color: themes.colors.primary,
        fontSize: 18,
        width: 30,
        height: 55,
        top: 5,
        left: 6,
        justifyContent: `center`,
        alignItems: `center`, 
        fontWeight: 400,
        fontFamily: themes.fonts.main
    },

    verificado:{
        top: 43,
        width: 55, 
        height: 55, 
        borderRadius: 30,
    },

    modalOverlay:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.colors.transparency,
    },

    modalButton:{
        backgroundColor: themes.colors.secondary,
        padding: 10,
        width: 65,
        height: 65,
        top: 160,
        borderRadius: 40,
    },

    modalContent:{
        width: "80%",
        padding: 20,
        backgroundColor: themes.colors.secondary,
        borderRadius: 10,
        alignItems: "center",
    }

}); 